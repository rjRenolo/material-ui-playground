import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts';
import Exercises from './components/exercises';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises
  };
  render() {
    return (
      <Fragment>
        <Header />

        <Exercises />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
