import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
render() {
return (
    <div className="App">
      <h1>Holla World</h1>
    </div>
  );
}
}

export default App;
