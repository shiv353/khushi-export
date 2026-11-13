import { getInquiryCollection } from "@/lib/mongodb";
import {
  AdminInquiriesGrid,
  type InquiryRow,
} from "@/components/AdminInquiriesGrid";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!process.env.MONGODB_URI) {
    return (
      <main className="min-h-screen bg-sage px-5 py-12 text-charcoal sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-display text-3xl text-forest">Inquiries</h1>
          <p role="alert" className="mt-5 border border-terracotta/30 bg-white p-5 text-sm">
            MongoDB is not configured. Set MONGODB_URI to load inquiries.
          </p>
        </div>
      </main>
    );
  }

  const collection = await getInquiryCollection();
  const inquiries = await collection
    .find({})
    .sort({ createdAt: -1 })
    .limit(500)
    .toArray();
  const rows: InquiryRow[] = inquiries.map((inquiry) => ({
    id: inquiry._id.toHexString(),
    createdAt: inquiry.createdAt.getTime(),
    name: inquiry.name,
    company: inquiry.company,
    email: inquiry.email,
    phone: inquiry.phone,
    country: inquiry.country,
    products: inquiry.products,
    message: inquiry.message,
  }));

  return (
    <main className="min-h-screen bg-sage px-5 py-10 text-charcoal sm:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="eyebrow">Khushi Exim</p>
          <h1 className="mt-2 font-display text-3xl text-forest md:text-4xl">
            Customer inquiries
          </h1>
          <p className="mt-2 text-sm text-charcoal/65">
            Search, sort, filter, and paginate the latest {rows.length} inquiries.
          </p>
        </header>

        {/* <aside
          role="alert"
          className="mb-6 border border-terracotta/30 bg-white p-4 text-sm leading-6 text-charcoal"
        >
          <strong className="text-terracotta">Not protected:</strong> anyone who
          visits this page can view customer inquiry details. Do not use this
          page with real submissions until admin access protection is added.
        </aside> */}

        {rows.length === 0 ? (
          <div className="border border-forest/10 bg-white p-8 text-center text-sm text-charcoal/65">
            No inquiries have been submitted yet.
          </div>
        ) : (
          <AdminInquiriesGrid rows={rows} />
        )}
      </div>
    </main>
  );
}
