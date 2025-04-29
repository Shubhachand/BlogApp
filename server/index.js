// Load dependencies
const express = require('express');
require('dotenv').config({ path: './server/.env' });
const connectDB = require('./config/database');
const blogRoutes = require('./routes/Blogs.js');

// App setup
const app = express();
app.use(express.json());

// Routes
app.use('/api/v1', blogRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Server setup
const PORT = process.env.PORT || 8000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
