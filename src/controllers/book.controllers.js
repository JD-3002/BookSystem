const Book = require("../models/Book.models")
const Review = require("../models/Review.models")


exports.addBook = async(req,res) =>{
    try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error('Error adding book:', error.message);
  }
}

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 10 } = req.query;
  const filter = {};
  if (author) filter.author = new RegExp(author, 'i');
  if (genre) filter.genre = new RegExp(genre, 'i');

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
};


exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const reviews = await Review.find({ book: book._id }).populate('user', 'username');
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  res.json({ book, averageRating: avgRating.toFixed(2), reviews });
};

exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  const regex = new RegExp(q, 'i');
  const books = await Book.find({
    $or: [{ title: regex }, { author: regex }]
  });
  res.json(books);
};