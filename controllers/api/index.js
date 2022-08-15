const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const blogPostCommentRoutes = require('./blogPostCommentRoutes');

router.use('/users', userRoutes);
router.use('/blog-posts', blogPostRoutes);
router.use('/blog-post-comments', blogPostCommentRoutes);

module.exports = router;
