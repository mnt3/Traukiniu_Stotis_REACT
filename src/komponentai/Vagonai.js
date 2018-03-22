import React from 'react';
import axios from 'axios';

class Vagonai extends React.Component{


    VagonoTrinimas=()=>{
        
         axios.delete(`http://localhost:8080/traukiniai/` +this.props.vagonas.id+`/vagonas`)
           .then(res => {
             console.log(res);
             console.log(res.data);
             window.location.reload();
           })
    
    }


render(){
    return(
        <li>
            <span>id : {this.props.vagonas.id} </span>
            <span>kaina: {this.props.vagonas.kaina*this.props.vagonas.kiekis} </span>

           <span> <button onClick={this.VagonoTrinimas} >delete</button></span>
           
</li>
            
    )
}
}
export default Vagonai;