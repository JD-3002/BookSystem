const express = require('express');
const auth = require('../middlewares/auth');
const {
  addBook,
  getBooks,
  getBookById,
  searchBooks
} = require('../controllers/book.controllers');

const router = express.Router();

router.post('/books', auth, addBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.get('/search', searchBooks);

module.exports = router;
