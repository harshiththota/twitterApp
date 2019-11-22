import React, { Component } from "react";

import SideNav from './SideNav';
import TweetCard from './TweetCard';

class Home extends Component {
  render() {
    const content = [1,2,3,4,5,6].map((index) =>
      <TweetCard />
    );
    return (
      <div>
        <SideNav />
        <div style={{"background-color": "lightblue" }}>
          {content}
        </div>  
      </div>
    );
  }
}
export default Home;
