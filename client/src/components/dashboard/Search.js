import React, { Component } from "react";

import SideNav from './SideNav';

class Search extends Component {
  render() {
    return (
      <div>
        <SideNav />
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <p className="flow-text grey-text text-darken-1">
                  In Search Screen
              </p>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
