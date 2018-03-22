import React, { Component } from 'react';

import './App.css';
import Traukiniai from './komponentai/Traukiniai'
import Vagonai from './komponentai/Vagonai'
import PridetiTraukini from './komponentai/PridetiTraukini'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Traukiniu stotis</h1>
<Traukiniai/>

<PridetiTraukini/>

      </div>
    );
  }
}

export default App;
