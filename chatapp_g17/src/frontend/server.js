import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/env.js', (_req, res) => {
  const cfg = {
    AUTH_URL: process.env.AUTH_URL || 'http://localhost:3001',
    CHAT_URL: process.env.CHAT_URL || 'http://localhost:3002'
  };
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`window.ENV = ${JSON.stringify(cfg)};`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`frontend listening on http://0.0.0.0:${PORT}`);
});