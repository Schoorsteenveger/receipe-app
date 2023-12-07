const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const errorMiddleware = require('./Middleware/errorMiddleware');
const recipeRoute = require('./Routes/recipeRoute');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 4000; // Use 3000 as a fallback if PORT is not defined
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND_URL = process.env.FRONTEND_URL

const corsOptions = {
  origin: FRONTEND_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// log requests to console
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));

// crossorigin sjizzle connection
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use('/api/recipes', recipeRoute);

app.get('/', (req, res) => {
  res.send('Welcome foodlover');
});

app.get('/blog', (req, res) => {
  res.send('Hello Blog, My name is Devtamin')
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('connected to mongodb');
    app.listen(PORT, () => {
      console.log(`Running at http://localhost:${PORT}`)
    });
  })
  .catch((err) => {
    console.error(err);
  });
