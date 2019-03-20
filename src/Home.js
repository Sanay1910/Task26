import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>/home</h2>
        <input type="text" name="search" placeholder="Search..."></input>
        <br/><br/><br/>
        <br/><br/><br/>
          <div className = "buttonstotheright"><a href="/restaurants/top5">Top 5 restaurants</a>
          <a href="/restaurants/reviews/recent">Recent reviews</a>
        </div>
      </div>
    );
  }
}

export default Home;
