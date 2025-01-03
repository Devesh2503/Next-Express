const express = require('express');
const { createBooking, getBookings, deleteBooking } = require('../controllers/bookingController');
const router = express.Router();

router.get('/', getBookings);
router.post('/', createBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
