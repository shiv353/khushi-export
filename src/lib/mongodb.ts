import "server-only";

import { MongoClient, type Collection } from "mongodb";

export type InquirySubmission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  products: string;
  message: string;
};

export type InquiryDocument = InquirySubmission & {
  createdAt: Date;
};

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

export async function getInquiryCollection(): Promise<
  Collection<InquiryDocument>
> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((error: unknown) => {
        globalForMongo.mongoClientPromise = undefined;
        throw error;
      });
  }

  const client = await globalForMongo.mongoClientPromise;
  const db = client.db("khushi-exim");
  return db.collection<InquiryDocument>("khushi-exim");
}
