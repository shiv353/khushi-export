# Khushi Exim

Website for Khushi Exim, built with Next.js 15 and ready to deploy on Vercel.

## Run locally

Use Node.js 20.9 or newer and npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Import this repository into Vercel and select **Next.js** as the framework.
2. Keep the project root and default build settings.
3. Deploy. No environment variables are required.

Vercel uses the npm lockfile to install dependencies and runs `npm run build`.
To verify a production build locally, run:

```bash
npm run build
```

## Inquiry form

The inquiry form currently validates fields in the browser but does not send or
store submissions. Connect it to an email or CRM service before relying on it
to receive customer enquiries.
