var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
const { Image } = require('../models/Image');
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

  res.render('index', { title: "NextWork - Home", user: user, posts: posts });
});

router.get('/p/:username', async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username });
  if(user){
    let tab = req.url.split('?')[1];
    if(tab=='posts'){
        var posts = await Post.find({ author: user._id })
          .populate('images author')
          .exec();
        var photos = null;
    }else{
        var posts = null;
        var photos = await Image.find({ uploader: user._id });
    }
    res.render('user', { title: `${user['username']} - Profile`, posts: posts, photos: photos, user: user });
  }else{
    res.render('error')
  }
});

router.get('/w/:id', async (req, res, next) => {
  try{
    const id = new Types.ObjectId(req.params.id);
    let post = await Post.findOne({ _id: id })
                      .populate('author images')
                      .exec();
    res.render('post', { title: `${post.author.fullname} - ${post.content.split(0, 50)}`, post: post, error: null });
  } catch(error){
    res.render('post', { title: `Post - `, post: null, error: error });
  }
});

module.exports = router;
