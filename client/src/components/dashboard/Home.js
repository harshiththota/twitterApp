import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SideNav from './SideNav';
import TweetCard from './TweetCard';
import { getTweets } from "../../actions/authActions";

class Home extends Component {
  componentDidMount() {
    this.props.getTweets();
  }
  render() {
    const tweetsData = this.props.tweets.tweets || [];

    const content = tweetsData.map((tw, index) =>
      <TweetCard
        content={tw.tweetContent}
        hashTag={tw.hashTag}
        date={tw.date}
        key={index}
      />
    );
    return (
      <div>
        <SideNav />
        <div style={{"backgroundColor": "lightblue" }}>
          {content}
        </div>  
      </div>
    );
  }
}

Home.propTypes = {
  getTweets: PropTypes.func.isRequired,
  tweets: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  { getTweets }
)(Home);
