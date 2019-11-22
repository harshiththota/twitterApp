const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateTweetInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.tweetContent = !isEmpty(data.tweetContent) ? data.tweetContent : "";
  data.hashTag = !isEmpty(data.hashTag) ? data.hashTag : "";

  // Tweet Content checks
  if (Validator.isEmpty(data.tweetContent)) {
    errors.email = "Tweet Content is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
