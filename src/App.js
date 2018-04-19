import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import digitsToEnglishFrom from './lib/logic/digitsToEnglish'
import ConversionComponent from './components/ConversionComponent'

class App extends Component {
  render() {
      window.digitsToEnglishFrom = digitsToEnglishFrom

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Digits To English</h1>
        </header>
       <ConversionComponent
         value={0}
       />

        <style jsx>{`
          header {
            margin-bottom: 0.5em
          }
        `}</style>
      </div>
    );
  }
}

export default App;
