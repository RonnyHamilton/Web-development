// Simple Express backend to store interested visitor details
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const DATA_FILE = 'visitors.json';

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]');
}

// Migration: Ensure all old entries have 'reason' field
try {
  const raw = fs.readFileSync(DATA_FILE);
  let arr = [];
  try {
    arr = JSON.parse(raw);
  } catch {}
  let changed = false;
  if (Array.isArray(arr)) {
    arr.forEach(entry => {
      if (typeof entry === 'object' && entry && !('reason' in entry)) {
        entry.reason = '';
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(DATA_FILE, JSON.stringify(arr, null, 2));
      console.log('Migrated visitors.json: added missing "reason" fields.');
    }
  }
} catch (e) {
  // Ignore errors
}

app.post('/api/visitors', (req, res) => {
  const { name, email, phone, reason, message } = req.body;
  console.log('Received POST /api/visitors:', req.body); // Debug log
  if (!name || !email || !reason) {
    return res.status(400).json({ error: 'Name, email, and reason are required.' });
  }
  const newEntry = { name, email, phone, reason, message, date: new Date().toISOString() };
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  data.push(newEntry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.get('/api/visitors', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Visitor backend running on http://localhost:${PORT}`);
});
