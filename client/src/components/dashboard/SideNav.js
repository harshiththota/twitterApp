import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class SideNav extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div >
      <ul id="slide-out" className="sidenav">
        <li />
        <li>
          <a href="home">Home</a>
        </li>
          <li>
            <a href="tweet">Tweet</a>
          </li>
        <li>
          <a href="search">Search</a>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="profile" href="profile">Profile</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Logout
                        </a>
        </li>
      </ul>
      <a href="#!" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div >
    );
  }
}
export default SideNav;