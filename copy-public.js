// Simple script to copy public directory contents to dist folder
const fs = require('fs-extra');
const path = require('path');

async function copyPublicToDist() {
  try {
    // Ensure dist directory exists
    await fs.ensureDir('dist');
    
    // Copy public directory contents to dist
    await fs.copy('public', 'dist', {
      overwrite: true,
      errorOnExist: false,
    });
    
    console.log('Successfully copied public directory to dist');
  } catch (err) {
    console.error('Error copying public directory:', err);
    process.exit(1);
  }
}

copyPublicToDist(); 