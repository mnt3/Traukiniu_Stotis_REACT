import React from 'react';
import axios from 'axios';

export default class PridetiVagona extends React.Component {
  state = {
    
    gamintojas: "",
    kiekis: "",
    kaina:"",
    turis: "",
    klase: ""

    
  }

  handleChange1 = event => {
    this.setState({ gamintojas: event.target.value });
  
  }
  handleChange2 = event => {
    this.setState({  kiekis: event.target.value });
  
  }
  handleChange3 = event => {
    this.setState({ kaina: event.target.value });
  
  }
  handleChange4 = event => {
    this.setState({ turis: event.target.value });
  
  }
  handleChange5 = event => {
    this.setState({ klase: event.target.value });
  
  }


  refresh(){
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();

   ;

    axios.put(`http://localhost:8080/traukiniai/`+this.props.traukinys.id+`/Kvagonas`, {  gamintojas: this.state.gamintojas,
    kiekis: this.state.kiekis,
    kaina: this.state.kainas, 
    turis: this.state.turis,
  klase: this.state.klase })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      window.location.reload();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <p>
          <label>
            Vagono gamintojas:
            <input type="text" name="gamintojas" onChange={this.handleChange1} />
          </label>
          </p>
          <p>
          <label>  
            Kiekis:
            <input type="text" name="kiekis" onChange={this.handleChange2} />
          </label>
          </p>
          <p>
          <label>  
            Kaina:
            <input type="text" name="kaina" onChange={this.handleChange3} />
          </label>
          </p>
          <p>
          <label>  
            Turis:
            <input type="text" name="turis" onChange={this.handleChange4} />
          </label>
          </p>
          <p>
          <label>  
            Klase:
            <input type="text" name="klase" onChange={this.handleChange5} />
          </label>
          </p>
          <button type="submit" >Add</button>
          
        </form>
       
      </div>
    )
  }
}