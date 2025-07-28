const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/yourdbname';

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api', require('./routes/health'));
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/secret'));

async function startServer() {
  try {
    await mongoose.connect(mongoUrl);
    console.log('Connected to MongoDB');

    // Seed an admin user if none exists
    const adminExists = await User.countDocuments({ role: 'admin' });
    if (adminExists === 0) {
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
      const adminPassword = process.env.ADMIN_PASSWORD || 'changeMe';
      const admin = new User({
        email: adminEmail,
        passwordHash: adminPassword,
        role: 'admin',
      });
      await admin.save();
      console.log('Default admin user created');
    }

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

startServer();
