const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TweetSchema = new Schema({
  tweetContent: {
    type: String,
    required: true
  },
  hashTag: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = Tweet = mongoose.model("tweets", TweetSchema);
