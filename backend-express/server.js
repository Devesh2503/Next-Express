const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config(); // Load environment variables

const app = express();

app.use(express.json());

// Configure CORS

const corsOptions = {

origin: process.env.FRONTEND_URL, // Allow all origins

methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods

allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers

};

app.use(cors(corsOptions)); I

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/bookings', bookingRoutes);

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/",(request,response)=>{
  response.send(`<h1>Welcome</h1>`)
});