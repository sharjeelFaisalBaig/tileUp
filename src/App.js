import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './Header';
import Footer from "./Footer";
import Home from "./Home";
import Step1 from "./Step1";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/step1">
            <Step1 />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Router>
        <Footer />
      </>
    );
  }
}
export default App;