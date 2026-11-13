import { NextResponse } from "next/server";
import {
  getInquiryCollection,
  type InquirySubmission,
} from "@/lib/mongodb";

export const runtime = "nodejs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readField(
  body: Record<string, unknown>,
  name: keyof InquirySubmission,
  required: boolean,
  maxLength: number,
): string | null {
  const rawValue = body[name];
  if (rawValue === undefined && !required) return "";
  if (typeof rawValue !== "string") return null;

  const value = rawValue.trim();
  if ((required && !value) || value.length > maxLength) return null;
  return value;
}

export async function POST(request: Request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: "Inquiry submissions are not configured." },
      { status: 503 },
    );
  }

  const contentLength = request.headers.get("content-length");
  if (
    contentLength !== null &&
    (!/^\d+$/.test(contentLength) || Number(contentLength) > 16_384)
  ) {
    return NextResponse.json(
      { error: "Request body is too large." },
      { status: 413 },
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { error: "Request body must be an object." },
      { status: 400 },
    );
  }

  const name = readField(body, "name", true, 120);
  const company = readField(body, "company", true, 160);
  const email = readField(body, "email", true, 254);
  const phone = readField(body, "phone", false, 40);
  const country = readField(body, "country", true, 100);
  const products = readField(body, "products", false, 500);
  const message = readField(body, "message", false, 5000);

  if (
    name === null ||
    company === null ||
    email === null ||
    phone === null ||
    country === null ||
    products === null ||
    message === null
  ) {
    return NextResponse.json(
      { error: "Please check the required fields and their lengths." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const inquiry: InquirySubmission = {
    name,
    company,
    email,
    phone,
    country,
    products,
    message,
  };

  try {
    const collection = await getInquiryCollection();
    await collection.insertOne({ ...inquiry, createdAt: new Date() });
  } catch (error) {
    console.error("Failed to store inquiry.", error);
    return NextResponse.json(
      { error: "The inquiry could not be saved right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
