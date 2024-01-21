var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const query = User.where({ username: 'mgmg' });
  const user = await query.findOne();
  const posts = await Post.find();

  res.render('index', { title: "Index", user: user, posts: posts });
});

module.exports = router;
