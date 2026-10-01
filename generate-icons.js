#!/usr/bin/env node

/**
 * Icon generator using sharp (optional)
 * Install: npm install sharp
 * Run: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch {
  console.error('sharp not installed. Run: npm install sharp');
  console.log('\nAlternatively, you can generate icons manually:');
  console.log('1. Create a 128x128px PNG image');
  console.log('2. Copy it as icons/16.png, icons/48.png, and icons/128.png');
  process.exit(1);
}

const iconsDir = path.join(__dirname, '../icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// SVG source (simple Google-like icon)
const svgSource = `
<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="64" cy="64" r="64" fill="#4285f4"/>
  
  <!-- G Letter -->
  <path d="M 64 30 C 48 30 35 43 35 59 C 35 71 44 81 56 84 L 56 71 L 46 71 L 46 60 L 56 60 L 56 53 C 56 43 62 38 71 38 C 74 38 77 38 79 39 L 79 49 C 77 49 75 49 73 49 C 69 49 67 51 67 56 L 67 60 L 79 60 L 77 71 L 67 71 L 67 83 C 81 81 93 71 93 59 C 93 43 80 30 64 30 Z" fill="white"/>
  
  <!-- Ban slash -->
  <circle cx="95" cy="95" r="15" fill="#ea4335"/>
  <line x1="85" y1="105" x2="105" y2="85" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>
`;

// Sizes to generate
const sizes = [16, 48, 128];

async function generateIcons() {
  try {
    for (const size of sizes) {
      const outputPath = path.join(iconsDir, `${size}.png`);
      
      await sharp(Buffer.from(svgSource))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Generated ${outputPath}`);
    }
    
    console.log('\n✅ Icons generated successfully!');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generateIcons();
