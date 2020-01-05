import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts';
import Exercises from './components/exercises';

import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises,
    exercise: {}
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

  categorySelector = category => {
    this.setState({
      category
    });
  };

  exerciseSelector = id => {
    // console.log(id);
    this.setState(state => ({
      exercise: state.exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const data = this.getExercisesByCategory();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />

        <Exercises
          exercises={data}
          categ={category}
          exercise={exercise}
          onSelect={this.exerciseSelector}
        />

        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.categorySelector}
        />
      </Fragment>
    );
  }
}

export default App;
