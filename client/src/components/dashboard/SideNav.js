import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class SideNav extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <div >
      <ul id="slide-out" className="sidenav">
        <li />
        <li>
          <Link to="/home" >Home</Link>
        </li>
          <li>
            <Link to="/tweet">Tweet</Link>
          </li>
        <li>
          <div className="divider" />
        </li>
        <li>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
        </li>
      </ul>
      <Link to="#!" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </Link>
    </div >
    );
  }
}

SideNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(SideNav);