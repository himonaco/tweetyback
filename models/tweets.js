const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  token: String,
  tweet: String,
  timestamp: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});


const Tweets = mongoose.model("tweets", tweetSchema);


module.exports = Tweets;