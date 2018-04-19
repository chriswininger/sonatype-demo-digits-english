import React, { Component } from 'react';
import './App.css';
import digitsToEnglishFrom from './lib/logic/digitsToEnglish'
import ConversionComponent from './components/ConversionComponent'
import AboutPage from './components/AboutPage'

class App extends Component {
    render() {
        window.digitsToEnglishFrom = digitsToEnglishFrom

        return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">Numbers To English Words</h1>
              </header>
              <main className="App-main-content">
                  <ConversionComponent
                    value={0}
                  />

                  <AboutPage/>
              </main>

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
