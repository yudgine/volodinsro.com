#!/usr/bin/env node

/**
 * Updates version in HTML files from package.json
 * Run: node scripts/update-version.js
 */

const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');
const version = packageJson.version;

const htmlFiles = ['index.html', 'services.html', 'about.html'];
const versionRegex = /<span class="footer__version">v[\d.]+<\/span>/g;
const newVersionTag = `<span class="footer__version">v${version}</span>`;

console.log(`Updating version to v${version}...`);

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);

  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(versionRegex, newVersionTag);
    fs.writeFileSync(filePath, content);
    console.log(`  ✓ ${file}`);
  } else {
    console.log(`  ✗ ${file} not found`);
  }
});

console.log('Done!');
