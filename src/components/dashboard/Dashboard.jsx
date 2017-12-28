import React, { Component } from 'react';
import Header from './../Header';
import DashboardNewsFeed from './DashboardNewsFeed';

class CelebrationContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container is-fluid is-0">
          <div className="columns has-top-bottom-gap">
            <div className="column is-half">
              <DashboardNewsFeed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CelebrationContainer;
