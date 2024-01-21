var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const post = Post({
    content: "Hello, world!",
    author: "65a2a71dd1595edc606a375d",
    createdAt: new Date(),
  })
  post.save()

  res.send(post);
});

module.exports = router;
