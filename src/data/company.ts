/**
 * Single source of truth for every legal / contact detail shown on the site.
 * Payment providers (Airwallex, Stripe, …) check that these details match the
 * company registry exactly — update them here and they propagate everywhere.
 */
export const company = {
  brand: 'USN',
  legalName: 'USN Ltd.',
  tagline: 'E-commerce operations, technology and growth — managed end to end.',
  motto: 'What is good for you is good for the world.',
  // Malta Business Registry
  registrationNumber: 'C 104012',
  registry: 'Malta Business Registry',
  legalForm: 'Private limited liability company (single member), incorporated in Malta',
  // Leave empty string if not yet VAT-registered; the footer hides it automatically.
  vatNumber: '',
  address: {
    line1: 'Level G, Office 1/0884, Quantum House',
    line2: '75, Abate Rigord Street',
    city: "Ta' Xbiex",
    postcode: 'XBX 1120',
    country: 'Malta',
  },
  email: 'info@usn-omni.com',
  phone: '+356 9916 4218',
  phoneHref: 'tel:+35699164218',
  website: 'https://usn-omni.eu',
  hours: 'Monday – Friday, 09:00 – 18:00 CET',
  languages: ['English', 'Italian'],
  founder: {
    name: 'Umberto Iorillo',
    role: 'Founder & Managing Director',
    linkedin: 'https://mt.linkedin.com/in/umberto-i-140ba41b8',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/usn-omni',
  },
} as const;

export const fullAddress = `${company.address.line1}, ${company.address.line2}, ${company.address.city} ${company.address.postcode}, ${company.address.country}`;
