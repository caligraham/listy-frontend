import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import ErrorPage from './components/Error'



class App extends Component {
render() {
return (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ ErrorPage } />
    </Switch>
    <Footer />
    </Router>
  );
}
}

export default App;
