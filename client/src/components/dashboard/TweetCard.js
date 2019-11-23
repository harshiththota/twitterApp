import React, { Component } from "react";

class TweetCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m5">
          <div className="card-panel teal">
            <span className="white-text">{this.props.content}</span>
            <br />
            <span className="white-text">{this.props.hashTag}</span>
            <br />
            <span className="white-text">{this.props.date}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default TweetCard;
