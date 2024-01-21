const { Post } = require("./models/Post");

async function seedDB() {
  const posts = [
    {
      content: "Hello, world!",
      author: "65a2a71dd1595edc606a375d",
      createdAt: new Date(),
    },
  ];

  await Post(posts[0]).save();
}

seedDB()