const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateSearchInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.twitterId = !isEmpty(data.tweetContent) ? data.tweetContent : "";

  // Tweet Content checks
  if (Validator.isEmpty(data.tweetContent)) {
    errors.twitterId = "Twitter Id  is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
