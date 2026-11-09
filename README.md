# usn-omni.eu — USN Ltd. corporate website

Multi-page corporate website for **USN Ltd.** (Malta, company no. C 104012), rebuilt from scratch to meet the website standards applied by payment providers (Airwallex, Stripe, Adyen) during business verification.

Stack: [Astro 7](https://astro.build) (static output) + Tailwind CSS 4, self-hosted fonts (Manrope, Inter), no trackers, no cookies.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: positioning, four service lines, why USN, process, founder teaser, FAQ, CTA |
| `/services` + `/services/<slug>` | Service overview and 4 detail pages (operations, technology, growth, multichannel) with deliverables, process, pricing and FAQ |
| `/how-we-work` | Engagement process, payment and billing model, guarantees |
| `/pricing` | Indicative pricing in EUR, per plan and per service line, billing FAQ |
| `/about` | Company profile, company facts box, values, HQ with map |
| `/founder` | Founder page (bio, principles, LinkedIn) |
| `/faq` | Full FAQ with FAQPage structured data |
| `/contact` | Email, phone, registered office, enquiry form (mailto-based, nothing stored), map |
| `/legal/terms` | Terms of Service, **governed by the laws of Malta** |
| `/legal/privacy` | GDPR privacy policy (controller + processor roles) |
| `/legal/cookies` | Cookie policy (no consent-requiring cookies) |
| `/legal/refunds` | Refund, Cancellation & Delivery Policy |
| `/legal/company-information` | Legal notice with all registry details |
| `/404` | Not-found page |

Also generated: `sitemap-index.xml`, `robots.txt`, `og.png`, favicon, web manifest, Organization/Person/Service/FAQ JSON-LD.

## Edit company details in one place

All legal and contact details live in **`src/data/company.ts`** and propagate to the footer, legal pages, structured data and contact page. Navigation lives in `src/data/nav.ts`, service content in `src/data/services.ts`.

### ⚠️ Facts to confirm before going live

These values were taken from the previous website and from the Malta Business Registry via OpenCorporates. Payment providers reject applications when the website and the registry disagree, so verify each one:

1. **Founder full name** — currently `Umberto I.` in `company.founder.name`. Replace with the full legal name as it appears on the MBR director record and on the Airwallex application.
2. **Registered office** — the site shows *Level G, Office 1/0884, Quantum House, 75 Abate Rigord Street, Ta' Xbiex XBX 1120*. The public registry extract still lists *31, Pjazza L-Erojj, Swatar, Birkirkara BKR 4251*. If the MBR has not been updated, either file the change of registered office or show the registry address on the site. **They must match.**
3. **VAT number** — set `company.vatNumber` (format `MT12345678`) if the company is VAT-registered; the footer and legal pages show it automatically.
4. **Email domain** — the site uses `info@usn-omni.com` while the domain is `usn-omni.eu`. Consider adding `info@usn-omni.eu` as an alias and using the `.eu` address on the Airwallex application, so the application email matches the website domain.
5. **Founder photo** — drop a real portrait at `public/founder.jpg` (ideally 640×800 or larger, 4:5). Until then an initials placeholder is shown. Reviewers distrust stock photos; use a real picture.
6. **Pricing** — the ranges on `/pricing` and in `src/data/services.ts` are realistic defaults for this kind of agency. Adjust them to your real price list; keep prices visible and in EUR.
7. **LinkedIn company page** — `company.social.linkedin` points to `linkedin.com/company/usn-omni`; create it or change the URL.

## Airwallex / payment-provider checklist (what this site covers)

- [x] Legal name, registration number, registered address, email and phone in the footer of **every** page and on a dedicated Company Information page
- [x] Clear description of the services sold, who buys them and how (proposal → service agreement → invoice)
- [x] Prices shown with currency (EUR) and VAT treatment
- [x] Terms of Service with an explicit governing-law sentence matching the country of registration (Malta)
- [x] Privacy Policy (GDPR), Cookie Policy, Refund/Cancellation **and** Delivery policy
- [x] Customer-service contact by email **and** phone with business hours; international dialling code
- [x] Named, real person on the About/Founder pages (no stock team)
- [x] Single business line (B2B e-commerce management) — no "marketplace", "dropshipping", crypto, FX, AI-product or other restricted-category language
- [x] Explicit statements that USN does not sell to consumers, does not hold client funds or stock, and does not process payments
- [x] No external redirects, no placeholder text, no broken links (checked by `scripts/qa.mjs`)
- [x] HTTPS-only, no third-party trackers, self-hosted fonts
- [x] Consistent English copy (the previous site mixed English and a Spanish cookie banner)

When re-applying, describe the business in the Airwallex form exactly as the site does: *"B2B e-commerce management services: outsourced operation of online stores and sales channels, e-commerce technology integration, growth consulting. Clients are EU brands and retailers; billed by monthly invoice in EUR."* and pick an IT / business-services industry category.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
node scripts/generate-og.mjs   # regenerate og.png / apple-touch-icon.png
node scripts/qa.mjs ./qa-shots # build first; screenshots + link/console check (needs Playwright)
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes `dist/` to **GitHub Pages** on every push to `main`. Enable Pages (Settings → Pages → Source: GitHub Actions) and point the `usn-omni.eu` DNS at GitHub Pages (`public/CNAME` is already included). The output is plain static files, so Netlify, Vercel or Cloudflare Pages work equally well: build command `npm run build`, output directory `dist`.
