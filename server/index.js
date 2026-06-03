import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ status: 'ok', message: 'Contact server is running.' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    if (!name || !email || !company || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const contact = new Contact({ name, email, company, message });
    await contact.save();

    return res.status(201).json({ success: true, message: 'Contact saved.' });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ error: 'Server error saving contact.' });
  }
});

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error('Missing MONGO_URI in environment. Please add it to .env');
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
