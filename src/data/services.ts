export interface Service {
  slug: string;
  icon: string;
  title: string;
  short: string;
  heroLead: string;
  forWho: string;
  deliverables: { t: string; d: string }[];
  included: string[];
  process: { t: string; d: string }[];
  pricing: { model: string; from: string; note: string };
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'ecommerce-operations',
    icon: 'store',
    title: 'E-commerce Operations Management',
    short: 'Day-to-day store management, catalogue, orders and customer care.',
    heroLead: 'We run your online store as if it were our own: catalogue, content, orders, returns and customer care — delivered by a named team, measured against monthly KPIs.',
    forWho: 'Brands and retailers with an established online store (typically €0.5M–€20M annual online revenue) that need a reliable operations team without hiring and managing one in-house.',
    deliverables: [
      { t: 'Catalogue & content operations', d: 'Product data, pricing, images, translations and SEO copy kept accurate across every channel and language.' },
      { t: 'Order, fulfilment & returns coordination', d: 'Daily order monitoring, exception handling, coordination with your warehouse or 3PL, returns and refunds processing within your policies.' },
      { t: 'Customer care', d: 'Email, chat and ticket management in English and Italian (other languages scoped on request), with agreed service levels and tone of voice.' },
      { t: 'Promotions & merchandising', d: 'Campaign calendar execution, landing pages, bundles, discount logic and on-site merchandising.' },
      { t: 'Reporting & monthly review', d: 'A single operations dashboard and a monthly review with recommendations, not just numbers.' },
    ],
    included: ['Named engagement manager', 'Documented procedures (SOPs) you own', 'Weekly status, monthly KPI review', 'Shared ticketing & task board', 'Business-hours coverage, Mon–Fri'],
    process: [
      { t: 'Audit (2 weeks)', d: 'We map current processes, tools, volumes and pain points, and agree the KPIs that matter.' },
      { t: 'Onboarding (2–4 weeks)', d: 'Access set-up, SOP writing, tone-of-voice guide, escalation matrix and dashboards.' },
      { t: 'Steady state', d: 'Daily operations with weekly status reports and a monthly review meeting.' },
    ],
    pricing: { model: 'Monthly retainer', from: 'from €2,500 / month', note: 'Scoped on order volume, catalogue size, channels and languages. Minimum term 3 months, then monthly rolling with 30 days’ notice.' },
    faq: [
      { q: 'Do you handle warehousing or shipping yourselves?', a: 'No. We coordinate your existing warehouse, 3PL or carriers. We do not hold stock or ship goods.' },
      { q: 'Do you need access to our payment accounts?', a: 'Only operational access to process refunds within your store platform, if that is part of the scope. We never hold funds and never take payments from your customers on your behalf.' },
      { q: 'Which platforms do you support?', a: 'Shopify and Shopify Plus, Adobe Commerce / Magento, WooCommerce, PrestaShop, BigCommerce and most headless set-ups.' },
    ],
  },
  {
    slug: 'technology',
    icon: 'code',
    title: 'Technology & Integrations',
    short: 'Platform builds, ERP/PIM/CRM integrations and workflow automation.',
    heroLead: 'Storefronts, integrations and automation built to be maintained — with documentation, tests and an exit plan, so you are never locked into us.',
    forWho: 'Businesses migrating or re-platforming their store, connecting it to an ERP, PIM or CRM, or drowning in manual processes that should be automated.',
    deliverables: [
      { t: 'Storefront development', d: 'Shopify / Shopify Plus, Adobe Commerce, WooCommerce and headless front-ends. Theme development, performance and accessibility work.' },
      { t: 'Systems integration', d: 'Bi-directional flows between store, ERP (SAP Business One, Microsoft Dynamics, Odoo, Zucchetti, TeamSystem…), PIM, CRM and logistics providers.' },
      { t: 'Workflow automation', d: 'Order routing, stock sync, pricing rules, invoicing, notifications and reporting pipelines — removing manual re-keying.' },
      { t: 'Data & analytics set-up', d: 'Server-side tracking, GA4 / consent-mode implementations and KPI dashboards.' },
      { t: 'Maintenance & support', d: 'Monitoring, updates, security patches and a support SLA.' },
    ],
    included: ['Technical discovery document', 'Architecture & integration map', 'Code in your repositories', 'Documentation & hand-over', 'Optional support SLA'],
    process: [
      { t: 'Discovery', d: 'Requirements, system inventory, data model and a fixed-price proposal.' },
      { t: 'Build', d: 'Two-week sprints with demos; you see progress continuously.' },
      { t: 'Launch & support', d: 'Go-live plan, hyper-care period and optional monthly support.' },
    ],
    pricing: { model: 'Fixed-price project or monthly support', from: 'projects from €8,000 · support from €900 / month', note: 'Projects are quoted after discovery with milestones; 40% deposit, balance on milestones. Support is monthly rolling.' },
    faq: [
      { q: 'Who owns the code?', a: 'You do. All code is delivered to repositories in your name under a perpetual licence; third-party components keep their own licences.' },
      { q: 'Do you build custom payment integrations?', a: 'We configure established payment providers on your store (Stripe, Adyen, PayPal, Airwallex and others) using their official plug-ins. We do not build or operate payment processing ourselves.' },
    ],
  },
  {
    slug: 'growth',
    icon: 'chart',
    title: 'Growth & Performance',
    short: 'Strategy, paid media management, CRO, SEO and analytics.',
    heroLead: 'A commercial roadmap and the hands to execute it: paid media, conversion optimisation, SEO and lifecycle marketing — reported against margin, not vanity metrics.',
    forWho: 'Brands with product-market fit that want to grow revenue profitably in existing and new European markets.',
    deliverables: [
      { t: 'Commercial strategy', d: 'Market and channel prioritisation, unit economics, pricing and promotion strategy, 12-month roadmap.' },
      { t: 'Paid media management', d: 'Google, Meta, Microsoft and retail media campaigns run in your own ad accounts, with budgets you control.' },
      { t: 'Conversion rate optimisation', d: 'Research, A/B testing programme and UX improvements to the purchase funnel.' },
      { t: 'SEO & content', d: 'Technical SEO, category and product content, multilingual expansion.' },
      { t: 'CRM & lifecycle', d: 'Email / SMS automation, segmentation, retention and loyalty mechanics.' },
    ],
    included: ['Monthly performance report', 'Quarterly strategy review', 'Ad spend paid directly by you', 'Full access to all data'],
    process: [
      { t: 'Baseline', d: 'Audit of analytics, funnel and media; agreed targets and guardrails.' },
      { t: 'Plan', d: 'Channel plan, test roadmap and budget allocation.' },
      { t: 'Execute & iterate', d: 'Weekly optimisation, monthly reporting, quarterly re-planning.' },
    ],
    pricing: { model: 'Monthly retainer', from: 'from €1,800 / month', note: 'Media budgets are paid by you directly to the advertising platforms and are never invoiced by USN. Minimum term 3 months.' },
    faq: [
      { q: 'Do you guarantee results?', a: 'No reputable partner can. We agree targets, report transparently every month and make it easy for you to leave if we are not delivering.' },
    ],
  },
  {
    slug: 'multichannel',
    icon: 'globe',
    title: 'Multichannel Sales Management',
    short: 'Your own seller accounts on Amazon, eBay and regional channels, run as one mix.',
    heroLead: 'We set up and run your seller accounts on Amazon, eBay and regional European channels, keeping listings, prices, stock and service levels in sync with your own store.',
    forWho: 'Brands that want to add or professionalise third-party sales channels across the EU without diluting their margins or their brand.',
    deliverables: [
      { t: 'Channel set-up & compliance', d: 'Account creation in your company’s name, VAT / EPR / packaging registrations coordination, brand registry and policy compliance.' },
      { t: 'Listing & content management', d: 'Localised listings, A+ content, images and translations for DE, FR, ES, IT, NL and more.' },
      { t: 'Pricing, stock & order sync', d: 'Repricing rules, inventory synchronisation with your store and ERP, order routing to your fulfilment partner.' },
      { t: 'Advertising', d: 'Sponsored ads managed within your own accounts and budgets.' },
      { t: 'Account health & customer service', d: 'Performance metrics monitoring, case handling and customer messages within channel SLAs.' },
    ],
    included: ['Accounts always in your name', 'Channel P&L per market', 'Monthly review', 'Expansion roadmap'],
    process: [
      { t: 'Feasibility', d: 'Category, margin and compliance check per channel and country.' },
      { t: 'Launch', d: 'Account, listings, logistics and pricing set-up.' },
      { t: 'Run', d: 'Daily management, advertising and monthly channel review.' },
    ],
    pricing: { model: 'Monthly retainer (+ optional performance component)', from: 'from €1,500 / month per channel group', note: 'Performance components, where agreed, are calculated on channel revenue and detailed in the proposal.' },
    faq: [
      { q: 'Is USN a marketplace or a reseller?', a: 'No. USN does not operate a marketplace and does not buy or resell your goods. We manage sales channels that belong to you, in your company’s name. Payouts from the channels go directly to your bank account.' },
    ],
  },
];
