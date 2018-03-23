import React from 'react';
import axios from 'axios';

export default class PridetiTraukini extends React.Component {
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

    axios.post(`http://localhost:8080/traukiniai`, {  data: this.state.data,
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
            Traukinio pagaminimo data:
            <input type="text" name="data" onChange={this.handleChange1} />
          </label>
          </p>
          <p>
          <label>  
            Gamintojas:
            <input type="text" name="gamintojas" onChange={this.handleChange2} />
          </label>
          </p>
          <p>
          <label>  
            Miestas:
            <input type="text" name="miestas" onChange={this.handleChange3} />
          </label>
          </p>
          <button type="submit" onClick={this.handleSubmit}>Add</button>
          
        </form>
       
      </div>
    )
  }
}