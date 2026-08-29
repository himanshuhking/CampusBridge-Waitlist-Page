#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'data');
const EXPORT_DIR = path.join(__dirname, '..', 'exports');

function readJSON(filePath) {
  if (!fs.existsSync(filePath)) return [];
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return [];
  }
}

function arrayToCSV(headers, rows) {
  const lines = [headers.join(',')];
  for (const row of rows) {
    lines.push(headers.map(h => `"${String(row[h] || '').replace(/"/g, '""')}"`).join(','));
  }
  return lines.join('\n');
}

// Ensure export dir exists
if (!fs.existsSync(EXPORT_DIR)) {
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
}

// Export signups
const signups = readJSON(path.join(DATA_DIR, 'signups.json'));
if (signups.length > 0) {
  const csv = arrayToCSV(['id', 'email', 'role', 'source', 'created_at'], signups);
  const filePath = path.join(EXPORT_DIR, `signups-${new Date().toISOString().split('T')[0]}.csv`);
  fs.writeFileSync(filePath, csv);
  console.log(`✅ Exported ${signups.length} signups to ${filePath}`);
} else {
  console.log('📭 No signups yet.');
}

// Export analytics
const analytics = readJSON(path.join(DATA_DIR, 'analytics.json'));
if (analytics.length > 0) {
  const flat = analytics.map(e => ({
    ...e,
    event_data: e.event_data ? JSON.stringify(e.event_data) : '',
  }));
  const csv = arrayToCSV(['id', 'event_type', 'event_data', 'page_url', 'created_at'], flat);
  const filePath = path.join(EXPORT_DIR, `analytics-${new Date().toISOString().split('T')[0]}.csv`);
  fs.writeFileSync(filePath, csv);
  console.log(`✅ Exported ${analytics.length} analytics events to ${filePath}`);
} else {
  console.log('📭 No analytics events yet.');
}
