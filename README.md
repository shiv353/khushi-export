# Khushi Exim

Website for Khushi Exim, built with Next.js 15 and ready to deploy on Vercel.

## Run locally

Use Node.js 20.9 or newer and npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## MongoDB configuration

Set `MONGODB_URI` to your MongoDB connection string in `.env.local` for local
development and in the deployment platform's environment variables for
production. Keep this value private and never commit it. Inquiries are stored
in the `khushi-exim` database and `khushi-exim` collection.

The form submits to `/api/inquiries`, and `/admin` displays the latest 500
submissions in an AG Grid with search, column filters, sorting, and pagination.
**The admin page is currently public and has no authentication.
Do not use it with real customer inquiries until access protection is added.**

## Deploy to Vercel

1. Import this repository into Vercel and select **Next.js** as the framework.
2. Keep the project root and default build settings.
3. Add `MONGODB_URI` in the project's Vercel environment variables before
   deploying.
4. The SEO canonical URLs and sitemap currently use
   `https://khushi-export.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` to the final
   HTTPS site origin when the custom domain is ready.

Vercel uses the npm lockfile to install dependencies and runs `npm run build`.
To verify a production build locally, run:

```bash
npm run build
```

## Inquiry form

The form validates submissions in the browser and on the server, then stores
them in MongoDB through `/api/inquiries`. The latest 500 submissions appear at
`/admin`. That page currently has no authentication; protect it before using it
with real customer data.
