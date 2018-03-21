import React from 'react';
import axios from 'axios';
import Traukinys from './Traukinys'

class Traukiniai extends React.Component {

    state = {
        traukiniai:[]
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/traukiniai`)
        .then(res => {
          console.log(res)
          const traukiniai = res.data;
          this.setState({ traukiniai });
        })

    }
    render(){
        let sastatas = this.state.traukiniai.map((traukinys)=>{
            return  <Traukinys key={traukinys.id} traukinys={traukinys}/>
        })
        return(
          
            <table>
            {sastatas}
            </table>
            
        )
    }

}
export default Traukiniai;