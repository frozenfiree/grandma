import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';
import Contact from './models/Contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === 'production';

// ─── Resend client ────────────────────────────────────────────────────────────
const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Recipients ───────────────────────────────────────────────────────────────
const recipients = [
  'shaun@b2bindemand.com',
  'saurabh@b2bindemand.com',
  'atique@b2bindemand.com',
  'utathya@b2bindemand.com',
  'sanket@b2bindemand.com',
  'pratik@b2bindemand.com',
];

// ─── CORS ─────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://www.grandmashive.com',
  'https://grandmashive.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));

// ─── Rate limiter — max 5 submissions per IP per 15 min ───────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests. Please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isSpam = (text) => {
  const spamPatterns = [
    /https?:\/\//i,
    /\b(casino|poker|viagra|cialis|crypto|bitcoin|nft|earn money fast)\b/i,
    /<[^>]+>/,
  ];
  return spamPatterns.some((p) => p.test(text));
};

const formatTimestamp = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  }) + ' IST';
};

// ─── Internal notification email HTML ─────────────────────────────────────────
const buildNotificationHtml = ({ name, email, phone, company, message }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrap { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #000; padding: 32px 40px; }
    .header h1 { color: #dbff00; margin: 0; font-size: 22px; letter-spacing: 1px; }
    .body { padding: 32px 40px; }
    .row { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #999; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111; word-break: break-word; }
    .message-box { background: #f9f9f9; border-left: 4px solid #dbff00; padding: 16px; border-radius: 4px; font-size: 15px; color: #333; white-space: pre-wrap; }
    .footer { background: #f9f9f9; padding: 16px 40px; font-size: 12px; color: #aaa; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>New Contact Submission — Grandma's Hive</h1>
    </div>
    <div class="body">
      <div class="row"><div class="label">Name</div><div class="value">${name}</div></div>
      <div class="row"><div class="label">Email</div><div class="value">${email}</div></div>
      <div class="row"><div class="label">Phone</div><div class="value">${phone || '—'}</div></div>
      <div class="row"><div class="label">Company</div><div class="value">${company}</div></div>
      <div class="row"><div class="label">Message</div><div class="message-box">${message}</div></div>
      <div class="row"><div class="label">Submitted</div><div class="value">${formatTimestamp()}</div></div>
    </div>
    <div class="footer">This email was sent automatically from grandmashive.com contact form.</div>
  </div>
</body>
</html>
`;

// ─── Confirmation email HTML (sent to the user) ────────────────────────────────
const buildConfirmationHtml = (name) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
    .wrap { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #000; padding: 32px 40px; }
    .header h1 { color: #dbff00; margin: 0; font-size: 22px; }
    .body { padding: 32px 40px; color: #333; font-size: 16px; line-height: 1.7; }
    .body h2 { color: #000; font-size: 20px; margin-top: 0; }
    .cta { display: inline-block; margin-top: 24px; background: #000; color: #dbff00; padding: 12px 28px; border-radius: 4px; text-decoration: none; font-weight: 700; font-size: 14px; letter-spacing: 1px; }
    .footer { background: #f9f9f9; padding: 16px 40px; font-size: 12px; color: #aaa; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>🐝 Grandma's Hive</h1>
    </div>
    <div class="body">
      <h2>Hey ${name}, we got your message.</h2>
      <p>Thanks for reaching out to Grandma's Hive. Our team will review your submission and get back to you within <strong>1–2 business days</strong>.</p>
      <p>In the meantime, feel free to check out our work at <a href="https://www.grandmashive.com" style="color:#000;">grandmashive.com</a>.</p>
      <a class="cta" href="https://www.grandmashive.com">VISIT OUR SITE →</a>
    </div>
    <div class="footer">© ${new Date().getFullYear()} Grandma's Hive. You're receiving this because you submitted our contact form.</div>
  </div>
</body>
</html>
`;

// ─── POST /api/contact ─────────────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // ── Validation ──────────────────────────────────────────────────────────
    const missing = [];
    if (!name?.trim())    missing.push('name');
    if (!email?.trim())   missing.push('email');
    if (!company?.trim()) missing.push('company');
    if (!message?.trim()) missing.push('message');

    if (missing.length) {
      return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}.` });
    }

    if (!isValidEmail(email.trim())) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (name.trim().length > 100 || company.trim().length > 100) {
      return res.status(400).json({ error: 'Name and company must be under 100 characters.' });
    }

    if (message.trim().length > 2000) {
      return res.status(400).json({ error: 'Message must be under 2000 characters.' });
    }

    // ── Spam check ──────────────────────────────────────────────────────────
    if (isSpam(message) || isSpam(name)) {
      return res.status(400).json({ error: 'Your message was flagged as spam.' });
    }

    const sanitized = {
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      phone:   phone?.trim() || '',
      company: company.trim(),
      message: message.trim(),
    };

    // ── Save to MongoDB ─────────────────────────────────────────────────────
    const contact = new Contact(sanitized);
    await contact.save();

    // ── Send notification to team ───────────────────────────────────────────
    await resend.emails.send({
      from:    'Grandmas Hive <noreply@grandmashive.com>',
      to:      recipients,
      subject: `New Contact: ${sanitized.name} — ${sanitized.company}`,
      html:    buildNotificationHtml(sanitized),
    });

    // ── Send confirmation to user ───────────────────────────────────────────
    await resend.emails.send({
      from:    'Grandmas Hive <noreply@grandmashive.com>',
      to:      [sanitized.email],
      subject: 'We got your message — Grandma\'s Hive',
      html:    buildConfirmationHtml(sanitized.name),
    });

    return res.status(201).json({ success: true, message: 'Message sent successfully.' });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error.message?.includes('CORS')) {
      return res.status(403).json({ error: 'Forbidden.' });
    }

    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// ─── Serve built React app in production ──────────────────────────────────────
if (isProd) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// ─── MongoDB + server start ────────────────────────────────────────────────────
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('Missing MONGO_URI in environment.');
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
