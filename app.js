const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost:27017/bookAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const bookRouter = express.Router();
const port = process.env.PORT || 3e3;
const Book = require('./models/bookModel');

bookRouter
  .route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });
bookRouter
  .route('/books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  });
app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});
app.listen(port, () => {
  console.info('Start: %s', new Date());
  console.info('Listening on port: %d', port);
});
