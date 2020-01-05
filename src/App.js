import React, { Fragment } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts';
import Exercises from './components/exercises';
function App() {
  return (
    <Fragment>
      <Header />

      <Exercises />

      <Footer />
    </Fragment>
  );
}

export default App;
