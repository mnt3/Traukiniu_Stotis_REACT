import React, { Component } from 'react';

import './App.css';
import Traukiniai from './komponentai/Traukiniai'
import Vagonai from './komponentai/Vagonai'

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
