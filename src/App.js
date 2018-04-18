import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import digitsToEnglishFrom from './lib/logic/digitsToEnglish'
import ConversionInput from './components/ConversionInput'

class App extends Component {
  render() {
      window.digitsToEnglishFrom = digitsToEnglishFrom

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <ConversionInput
         value={5400}
       />
      </div>
    );
  }
}

export default App;
