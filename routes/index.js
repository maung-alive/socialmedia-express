var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
const { Types } = require('mongoose');
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
  let posts = await Post.find({ author: user._id });
  res.render('user', { title: `Profile - ${user['username']}`, posts: posts, user: user });
});

router.get('/w/:id', async (req, res, next) => {
  try{
    const id = new Types.ObjectId(req.params.id);
    let post = await Post.findOne({ _id: id })
                      .populate('author images')
                      .exec();
    res.render('post', { title: `Post - `, post: post, error: null });
  } catch(error){
    res.render('post', { title: `Post - `, post: null, error: error });
  }
});

module.exports = router;
