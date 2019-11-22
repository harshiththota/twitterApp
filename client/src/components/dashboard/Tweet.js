import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { tweet } from "../../actions/authActions";
import classnames from "classnames";

import SideNav from './SideNav';

class Tweet extends Component {
  constructor() {
    super();
    this.state = {
      tweetContent: "",
      hashTag: "",
      errors: {},
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const tweetData = {
      tweetContent: this.state.tweetContent,
      hashTag: this.state.hashTag
    };

    this.props.tweet(tweetData);
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };


  render() {
    const { errors } = this.state;

    return (
      <div>
        <SideNav />
        <div className="row">
          <form className="col s12" noValidate onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <textarea
                onChange={this.onChange}
                value={this.state.tweetContent}
                error={errors.tweetContent}
                id="tweetContent"
                type="tweetContent"
                className={classnames("", {
                  invalid: errors.tweetContent
                })}
              />
              <label htmlFor="email">Tweet Content</label>
              <span className="red-text">
                {errors.tweetContent}
              </span>
            </div>
            <div className="input-field col s12">
              <textarea
                onChange={this.onChange}
                value={this.state.hashTag}
                error={errors.hashTag}
                id="hashTag"
                type="hashTag"
                className={classnames("", {
                  invalid: errors.hashTag
                })}
              />
              <label htmlFor="email">HashTag</label>
              <span className="red-text">
                {errors.hashTag}
              </span>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Tweet
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { tweet }
)(Tweet);


