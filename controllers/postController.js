// DATABASE
const connection = require("../data/db");

// FAKE DATABASE
const postData = require("../data/postData");

// Index

const index = (req, res) => {
  const sql = `SELECT * FROM db_blog.posts`;

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
};

// Show
const show = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  res.json(post);
};
// Store
const store = (req, res) => {
  const newId = postData[postData.length - 1].id + 1;
  const newpost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  postData.push(newpost);
  res.status(201).json(newpost);
};
// Update
const update = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "post not found",
    });
  }
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  res.json(post);
};
// Modify
const modify = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "post not found",
    });
  }
  if (req.body.title) {
    post.title = req.body.title;
  }
  if (req.body.content) {
    post.content = req.body.content;
  }
  if (req.body.image) {
    post.image = req.body.image;
  }
  res.json(post);
};
// Delete
const destroy = (req, res) => {
  const post = postData.find((elm) => elm.id == req.params.id);
  if (!post) {
    return res.status(404).json({
      error: "Post not found",
    });
  }
  postData.splice(postData.indexOf(post), 1);
  res.sendStatus(204);
};
module.exports = { index, show, store, update, modify, destroy };
