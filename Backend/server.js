import express from 'express';
import { PORT, MONGO_URL, FRONTEND_URL } from './config.js';
import mongoose from 'mongoose';
import errorMiddleware from './Middleware/errorMiddleware.js';
import recipeRoute from './Routes/recipeRoute.js';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

const corsOptions = {
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200
};

// log requests to console
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));

// crossorigin sjizzle connection
app.use(cors(corsOptions));

// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/recipes', recipeRoute);

app.get('/', (req, res) => {
  res.send('Welcome food lover');
});

app.get('/blog', (req, res) => {
  res.send('Hello Blog, My name is Devtamin');
});

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('connected to mongodb');
    app.listen(PORT, () => {
      console.log(`Running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
