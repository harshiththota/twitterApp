import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { searchUser } from "../../actions/authActions";
import SideNav from './SideNav';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      twitterId: "",
      errors: {},
    };
  }
  
  onSubmit = e => {
    e.preventDefault();

    this.props.searchUser(this.state.twitterId);
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <SideNav />
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-field col s12">
            <input
              onChange={this.onChange}
              value={this.state.twitterId}
              error={errors.twitterId}
              id="twitterId"
              type="text"
              className={classnames("", {
                invalid: errors.twitterId
              })}
            />
            <label htmlFor="twitterId">Search Twitter Id</label>
            <span className="red-text">
              {errors.twitterId}
            </span>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Search
                <i className="material-icons right">search</i>
          </button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { searchUser }
)(Search);
