const Post = require('../models/postModel');

exports.createBlog = async (req, res) => {
    try {
        const { title, body } = req.body;

        // Validate required fields
        if (!title || !body) {
            return res.status(400).json({
                success: false,
                message: "Please provide both title and body."
            });
        }

        // Only pass valid schema fields
        const newBlog = await Post.create({ title, body });

        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: newBlog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating blog",
            error: error.message
        });
    }
};
