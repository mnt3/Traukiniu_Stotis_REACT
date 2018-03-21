import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Traukiniai from './komponentai/Traukiniai'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Traukiniu stotis</h1>
<Traukiniai/>

      </div>
    );
  }
}

export default App;
