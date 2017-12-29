import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from '@/components/dashboard/Dashboard';
import InteractivePlatMap from '@/components/interactivePlatMap/InteractivePlatMap'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/interactive-plat-map" component={InteractivePlatMap} />
        </div>
      </Router>
    );
  }
}

export default App;
