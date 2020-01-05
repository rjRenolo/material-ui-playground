import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts';
import Exercises from './components/exercises';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises
  };

  getExercisesByCategory = () => {
    return Object.entries(
      this.state.exercises.reduce((accumulator, exercise) => {
        // turned into array
        const { muscles } = exercise;

        // dang gonna study this categorizing method... look it up in store.js for the data pertaining this shiz...
        accumulator[muscles] = accumulator[muscles]
          ? [...accumulator[muscles], exercise]
          : [exercise];
        return accumulator;
      }, {})
    );
  };

  render() {
    const data = this.getExercisesByCategory();
    return (
      <Fragment>
        <Header />

        <Exercises exercises={data} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
