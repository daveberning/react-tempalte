import React, { Component } from 'react';
import '@/components/dashboard/styles/DashboardNewsFeed.scss';

class DashboardNewsFeed extends Component {
  render() {
    return (
      <div>
        <h2 className="h1">News</h2>
        <div className="post">
          <h2 className="h3">I am a post</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus vehicula leo eget mollis. Integer pellentesque vestibulum porta. Fusce vitae mollis magna, vel vulputate velit. Proin cursus tincidunt rutrum. Praesent vel malesuada purus. Vestibulum ac facilisis lorem, at vehicula sem. Nam quis risus sed urna tempus hendrerit sit amet non risus.</p>
        </div>
      </div>
    );
  }
}

export default DashboardNewsFeed;
