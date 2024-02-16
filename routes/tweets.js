var express = require("express");
var router = express.Router();

const Tweets = require("../models/tweets");
const Users = require("../models/users");

const { checkTweetInput } = require('../modules/checkTweetInput')

router.post("/send", (req, res) => {
  const { token, tweet, timestamp } = req.body;

  if (!checkTweetInput(req.body, ["tweet"])) {
    res.json({ result: false, error: "Please enter a tweet first !" });
    return;
  }

  Users.findOne({ token }).then((data) => {
    const newTweet = new Tweets({ tweet, timestamp, author: data._id });
    newTweet.save().then(() => res.json({ result: true }));
  });
});

router.get("/all", (req, res) => {
  Tweets.find({})
    .populate("author")
    .then((data) => res.json({ result: true, tweets: data }));
});

router.delete("/delete/:tweetId", (req, res) => {
  const { tweetId } = req.params;
  Tweets.findByIdAndDelete(tweetId).then(() => res.json({ result: true }));
});

module.exports = router;