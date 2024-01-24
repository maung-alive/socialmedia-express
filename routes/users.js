var express = require('express');
const { User } = require('../models/User');
const { Post } = require('../models/Post');
const { Image } = require('../models/Image');
var router = express.Router();

function stringify(obj) {
  let cache = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const post = Post({
    content: "Hello, world!",
    author: "65a29b26e1a9dbb055794292",
    images: [],
    createdAt: new Date(),
  })
  let i = 8;
  while(i>0){
    const image = Image({
      url: "https://picsum.photos/1200",
      uploader: "65a29b26e1a9dbb055794292",
      createdAt: new Date()
    })
    image.save();
    post.images.push(image);
    i -= 1;
  }
  post.save()
  //res.send(post);
  let posts = await Post.find({}).populate('images').exec();
  res.send(posts)
});

module.exports = router;
