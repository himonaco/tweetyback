function checkTweetInput(tweetInput, keys) {
    for (let key of keys) {
      if (!tweetInput[key]) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = { checkTweetInput };
  