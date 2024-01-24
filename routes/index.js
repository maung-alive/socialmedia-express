var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const query = User.where({ username: 'mgmg' });
  const user = await query.findOne();
  const posts = await Post
    .find()
    .populate('images author')
    .exec();

  res.render('index', { title: "Home", user: user, posts: posts });
});

router.get('/posts/:id', async (req, res, next) => {
  const query = User.where({ username: 'mgmg' });
  const posts = await query.find('post');

  res.render('post', { title: "Index", post: post });
});

module.exports = router;
