import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs><radialGradient id="g" cx="75%" cy="20%" r="60%"><stop offset="0" stop-color="#14b8a6" stop-opacity=".45"/><stop offset="1" stop-color="#070b14" stop-opacity="0"/></radialGradient>
<pattern id="p" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0v56" fill="none" stroke="#ffffff" stroke-opacity=".06"/></pattern></defs>
<rect width="1200" height="630" fill="#070b14"/><rect width="1200" height="630" fill="url(#p)"/><rect width="1200" height="630" fill="url(#g)"/>
<rect x="80" y="80" width="72" height="72" rx="20" fill="#fff"/><path d="M100 100v17a16 16 0 0 0 32 0v-17" fill="none" stroke="#0b1120" stroke-width="6.5" stroke-linecap="round"/><circle cx="132" cy="100" r="5.5" fill="#14b8a6"/>
<text x="172" y="134" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="46" fill="#fff">USN<tspan fill="#14b8a6">.</tspan></text>
<text x="80" y="300" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="64" fill="#fff">The ultimate e-commerce</text>
<text x="80" y="376" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="64" fill="#fff">management partner.</text>
<text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#c9d3e3">Operations · Technology · Growth · Multichannel — managed end to end.</text>
<text x="80" y="550" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#97a5bf">USN Ltd. · Ta' Xbiex, Malta · Company no. C 104012 · usn-omni.eu</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="180" height="180"><rect width="40" height="40" fill="#0b1120"/><path d="M11 12v9.5a9 9 0 0 0 18 0V12" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/><circle cx="29" cy="12" r="3" fill="#14b8a6"/></svg>`;
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('ok');
