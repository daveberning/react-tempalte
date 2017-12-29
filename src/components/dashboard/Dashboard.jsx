import React, { Component } from 'react';
import Header from '@/components/Header';
import DashboardNewsFeed from '@/components/dashboard/DashboardNewsFeed';

class Dashboard extends Component {
  render() {
    return (
      <div>
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

export default Dashboard;
