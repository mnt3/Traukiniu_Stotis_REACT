import React, { Component } from 'react';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import {TabMenu} from 'primereact/components/tabmenu/TabMenu';
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
