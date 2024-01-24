var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const query = User.where({ username: 'mg-mg' });
  const user = await query.findOne();
  const posts = await Post
    .find()
    .populate('images author')
    .exec();

  res.render('index', { title: "Home", user: user, posts: posts });
});

router.get('/p/:username', async (req, res, next) => {
  let user = await User.findOne({ username: req.params.username });
  let posts = await Post.find({ author: '65a29b26e1a9dbb055794292' });
  res.render('user', { title: `User - ${user['username']}`, posts: posts, user: user });
});

module.exports = router;
