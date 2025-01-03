const Booking = require('../models/Booking');

// Get bookings (filter by date and time)
const getBookings = async (req, res) => {
  const { date, time } = req.query;
  try {
    const bookings = await Booking.find({ date, time });
    res.json({ availableSlots: bookings.length === 0 ? ['Available'] : [] });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a booking
const createBooking = async (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  try {
    const existingBooking = await Booking.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ message: 'Slot is already booked' });
    }
    const newBooking = await Booking.create({ date, time, guests, name, contact });
    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.json({ message: 'Booking deleted!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { getBookings, createBooking, deleteBooking };
