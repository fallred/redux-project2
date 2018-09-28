import React, { Component } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Counter from './components/Counter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <Counter />
      </div>
    );
  }
}

export default App;
