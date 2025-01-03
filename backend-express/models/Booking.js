const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  name: { type: String, required: true },
  contact: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
