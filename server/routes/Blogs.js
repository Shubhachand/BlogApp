const express = require('express');
const router = express.Router();

// Import the createBlog controller
const { createBlog } = require('../controllers/createBlog');

// Route to create a blog post
router.post('/post', createBlog);

module.exports = router;
