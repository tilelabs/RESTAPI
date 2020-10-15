import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import router from './router.js';

const app = expresss();

// Connect to DB
mongoose.connect('mongodb+srv://admin:admin@homework.hin5z.mongodb.net/jadwalin?retryWrites=true&w=majority',
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }, () => {
  console.log('Connect to database success');
});

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res, next) => {
  res.json({
    message: 'success',
  });
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`App listens to port ${process.env.PORT}`);
});