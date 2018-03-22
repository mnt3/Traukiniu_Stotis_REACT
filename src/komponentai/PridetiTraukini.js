import React from 'react';
import axios from 'axios';

export default class PridetiSaskaitas extends React.Component {
  state = {
    data: "",
    gamintojas: "",
    miestas : ""
    
  }

  handleChange1 = event => {
    this.setState({ data: event.target.value });
  
  }
  handleChange2 = event => {
    this.setState({  gamintojas: event.target.value });
  
  }
  handleChange3 = event => {
    this.setState({ miestas: event.target.value });
  
  }

  refresh(){
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();

   ;

    axios.post(`http://localhost:8080/saskaitos`, {  data: this.state.data,
    gamintojas: this.state.gamintojas,
    miestas: this.state.miestas })
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
            Israsanti imone:
            <input type="text" name="imone" onChange={this.handleChange2} />
          </label>
          </p>
          <p>
          <label>  
            Gavejas:
            <input type="text" name="gavejas" onChange={this.handleChange3} />
          </label>
          </p>
          <p>
          <label>  
            Saskaitos numeris:
            <input type="text" name="numeris" onChange={this.handleChange1} />
          </label>
          </p>
          <button type="submit" >Add</button>
          
        </form>
       
      </div>
    )
  }
}