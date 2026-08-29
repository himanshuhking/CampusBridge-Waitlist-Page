import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SIGNUPS_FILE = path.join(DATA_DIR, 'signups.json');
const ANALYTICS_FILE = path.join(DATA_DIR, 'analytics.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize files if they don't exist
function ensureFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
  }
}

function readJSON(filePath: string): any[] {
  ensureFile(filePath);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeJSON(filePath: string, data: any[]) {
  ensureFile(filePath);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Signup functions
export function addSignup(email: string, role: string = 'student', source: string = 'landing_page') {
  const signups = readJSON(SIGNUPS_FILE);
  const newSignup = {
    id: signups.length + 1,
    email,
    role,
    source,
    created_at: new Date().toISOString(),
  };
  signups.push(newSignup);
  writeJSON(SIGNUPS_FILE, signups);
  return newSignup;
}

export function getSignupCount() {
  const signups = readJSON(SIGNUPS_FILE);
  return signups.length;
}

export function getAllSignups() {
  return readJSON(SIGNUPS_FILE);
}

// Analytics functions
export function trackEvent(eventType: string, eventData?: Record<string, unknown>, pageUrl?: string) {
  const events = readJSON(ANALYTICS_FILE);
  const newEvent = {
    id: events.length + 1,
    event_type: eventType,
    event_data: eventData || null,
    page_url: pageUrl || null,
    created_at: new Date().toISOString(),
  };
  events.push(newEvent);
  writeJSON(ANALYTICS_FILE, events);
  return newEvent;
}

export function getEventCounts() {
  const events = readJSON(ANALYTICS_FILE);
  const counts: Record<string, number> = {};
  for (const event of events) {
    counts[event.event_type] = (counts[event.event_type] || 0) + 1;
  }
  return Object.entries(counts).map(([event_type, count]) => ({ event_type, count }));
}
