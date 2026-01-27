#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate a report with timestamp
 * This demonstrates caching issues because the timestamp changes on each run
 */
function generateReport() {
  const timestamp = new Date().toISOString();
  const report = `
Report Generated
================

Generated at: ${timestamp}

This report contains a timestamp that changes on every build,
demonstrating how dynamic content can affect Nx caching behavior.

Summary:
- Total items: 42
- Status: OK
`;

  const outputDir = path.join(__dirname, 'tmp');
  const outputFile = path.join(outputDir, 'report.txt');

  // Ensure tmp directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, report);
  console.log(`Report generated: ${outputFile}`);
  console.log(`Timestamp: ${timestamp}`);
}

generateReport();
