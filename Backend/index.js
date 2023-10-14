// server.js
const express = require('express');
const app = express();
const port = 3001;
const { MongoClient } = require('mongodb');
app.use(express.json());
const cors = require('cors');
app.use(cors());

//register
app.post('/api/reg', async (req, res) => {
  const userData = req.body;

  const uri = 'mongodb+srv://midhun:midhunvs21@cluster0.m4xcgpo.mongodb.net';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('bookingdatas');
    const collection = database.collection('users');
    
    const result = await collection.insertOne(userData);
    
    res.json({ message: 'Registration successful', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Registration failed' });
  } finally {
    await client.close();
  }
});

//signin
app.post('/api/sin', async (req, res) => {
  const { email, password } = req.body;
  const uri = 'mongodb+srv://midhun:midhunvs21@cluster0.m4xcgpo.mongodb.net';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('bookingdatas');
    const collection = database.collection('users');

    const user = await collection.findOne({ email });
    if (user.password === password) {
      res.json({ message: 'Sign-in successful' });
      
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Sign-in failed' });
  } finally {
    await client.close();
  }
});

//dashboard details
app.post('/api/userdata', async (req, res) => {
  const {email} = req.user.email;
  const uri = 'mongodb+srv://midhun:midhunvs21@cluster0.m4xcgpo.mongodb.net';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const database = client.db('bookingdatas');
    const collection = database.collection('users');

    const user = await collection.findOne({ email });
    console.log(user);
    const userData = {
      name: user.name,
      number: user.number,
      email: user.email,
    };
    res.json({userData});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




//port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
