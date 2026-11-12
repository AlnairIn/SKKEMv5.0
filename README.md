# Saudi K-KEM Website

Service-first corporate site for an industrial services and engineering consultation company (Al Jubail, Saudi Arabia).
Next.js 15 (App Router) + TypeScript + Tailwind CSS. Deploys to Vercel.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

## Structure

```
src/
  app/
    page.tsx                 homepage
    services/                /services and /services/[slug]
    about/, careers/, contact/
    api/inquiry/             POST handler: emails RFP / quote requests via Resend
    sitemap.ts, robots.ts
  components/
    layout/                  Navbar (Services dropdown), Footer
    home/                    Hero, StatsCounter, ServiceGrid, TrackRecord, SafetyCompliance, InquirySection
    services/                ServiceCard, ServiceIcon
    forms/                   InquiryForm
  lib/
    services.ts              SERVICE CATALOG (edit this to change service pages, nav, footer, sitemap)
    site.ts                  company details, headline stats, nav links
```

## Before launch checklist

- Replace placeholder phone and emails in `src/lib/site.ts`.
- Review every service in `src/lib/services.ts` (capabilities, "includes", standards) and add the full 67+ service list.
- Review the Safety & Compliance copy in `src/components/home/SafetyCompliance.tsx`; add certifications and client approvals only once documented.
- Replace the About and Careers placeholder copy.
- Set `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` in your host's environment settings.
- Add a logo, favicon (`src/app/icon.png`) and an Open Graph image.
