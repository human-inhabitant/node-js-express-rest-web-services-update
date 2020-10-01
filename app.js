const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/bookAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const port = process.env.PORT || 3e3;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});
app.listen(port, () => {
  console.info('Start: %s', new Date());
  console.info('Listening on port: %d', port);
});
