const express = require('express');
const auth = require('../middlewares/auth');
const {
  addReview,
  updateReview,
  deleteReview
} = require('../controllers/review.controllers.js');

const router = express.Router();

router.post('/books/:id/reviews', auth, addReview);
router.put('/reviews/:id', auth, updateReview);
router.delete('/reviews/:id', auth, deleteReview);

module.exports = router;
