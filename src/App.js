import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Wrapper} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;