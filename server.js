const express = require('express');
const cors = require('cors');
const path = require('node:path');
const fs = require('node:fs/promises');

const app = express();
const PORT = process.env.PORT || 5050;
const dataFile = path.join(__dirname, 'data', 'supporters.json');
const pollFile = path.join(__dirname, 'data', 'pollVotes.json');
const allowedParties = ['TVK', 'DMK', 'AIADMK', 'NTK', 'BJP', 'Others'];

app.use(cors());
app.use(express.json());

async function readSupporters() {
  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeSupporters(data) {
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), 'utf8');
}

async function readPollVotes() {
  try {
    const raw = await fs.readFile(pollFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writePollVotes(data) {
  await fs.writeFile(pollFile, JSON.stringify(data, null, 2), 'utf8');
}

function summarizePoll(votes) {
  const counts = allowedParties.reduce((acc, party) => {
    acc[party] = 0;
    return acc;
  }, {});

  votes.forEach((vote) => {
    if (counts[vote.party] !== undefined) {
      counts[vote.party] += 1;
    }
  });

  return {
    total: votes.length,
    counts,
  };
}

app.get('/api/supporters', async (req, res) => {
  try {
    const supporters = await readSupporters();
    res.json({ supporters });
  } catch (error) {
    console.error('GET /api/supporters failed:', error);
    res.status(500).json({ message: 'Failed to load supporters.' });
  }
});

app.post('/api/supporters', async (req, res) => {
  try {
    const { name, phone, district, reason, language } = req.body || {};

    if (!name || !district || !reason) {
      return res.status(400).json({
        message: 'Name, district, and support message are required.',
      });
    }

    const clean = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name: String(name).trim(),
      phone: String(phone || '').trim(),
      district: String(district).trim(),
      reason: String(reason).trim(),
      language: language === 'ta' ? 'ta' : 'en',
      createdAt: new Date().toISOString(),
    };

    if (!clean.name || !clean.district || !clean.reason) {
      return res.status(400).json({
        message: 'Please provide valid details.',
      });
    }

    const supporters = await readSupporters();
    supporters.unshift(clean);
    await writeSupporters(supporters);

    return res.status(201).json({ supporter: clean });
  } catch (error) {
    console.error('POST /api/supporters failed:', error);
    return res.status(500).json({ message: 'Unable to save your message right now.' });
  }
});

app.get('/api/poll', async (req, res) => {
  try {
    const votes = await readPollVotes();
    res.json(summarizePoll(votes));
  } catch (error) {
    console.error('GET /api/poll failed:', error);
    res.status(500).json({ message: 'Failed to load poll results.' });
  }
});

app.post('/api/poll-vote', async (req, res) => {
  try {
    const { party, district } = req.body || {};
    const cleanParty = String(party || '').trim();
    const cleanDistrict = String(district || '').trim();

    if (!allowedParties.includes(cleanParty)) {
      return res.status(400).json({ message: 'Invalid party option.' });
    }

    const vote = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      party: cleanParty,
      district: cleanDistrict,
      createdAt: new Date().toISOString(),
    };

    const votes = await readPollVotes();
    votes.unshift(vote);
    await writePollVotes(votes);

    return res.status(201).json(summarizePoll(votes));
  } catch (error) {
    console.error('POST /api/poll-vote failed:', error);
    return res.status(500).json({ message: 'Unable to save poll vote right now.' });
  }
});

const clientDist = path.join(__dirname, 'client', 'dist');
app.use(express.static(clientDist));

app.use(async (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  try {
    await fs.access(path.join(clientDist, 'index.html'));
    return res.sendFile(path.join(clientDist, 'index.html'));
  } catch {
    return res.status(200).send('API server is running. Start React dev server with: npm run client');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
