import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from '@/components/dashboard/Dashboard';
// import AnotherComponent from '@/components/anotherComponent/AnotherComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          {/* <Route exact path="/another-component" component={AnotherComponent} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
