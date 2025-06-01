const Review = require('../models/Review.models');

exports.addReview = async (req, res) => {
  const { id: bookId } = req.params;
  const { rating, comment } = req.body;
  const existing = await Review.findOne({ user: req.user.userId, book: bookId });

  if (existing) return res.status(400).json({ message: 'Already reviewed' });

  const review = new Review({
    user: req.user.userId,
    book: bookId,
    rating,
    comment
  });

  await review.save();
  res.status(201).json(review);
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Unauthorized' });

  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Unauthorized' });

  await review.remove();
  res.json({ message: 'Review deleted' });
};
