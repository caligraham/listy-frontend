import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getLists } from './actions';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Index'
import ErrorPage from './components/Error';
import Form from './components/Form';



class App extends Component {

  componentDidMount(){
    this.props.getLists();
  }

render() {
  if(this.props.loading) {
    return (
      <h3>Loading...</h3>
    )
  }


return (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component= { About } />
      <Route exact path="/lists" component={ Index } />
      <Route exact path="/lists/new" component={ Form } />
      <Route component={ ErrorPage } />
    </Switch>
    <Footer />
    </Router>
  );
}
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getLists })(App);
