import express from 'express';
import cors from 'cors';
import database from './config/database/index.js';
import dotenv from 'dotenv';
import 'dotenv/config.js';
import { appRouter } from './routes/index.js';
import bodyParser from 'body-parser';
import multer from 'multer';

const upload = multer();

const app = express();

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],

  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOpts));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

// connect DB
database.connect();

// router
app.use('/api/v1', appRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Your app listening at http://localhost:${PORT}`);
});
