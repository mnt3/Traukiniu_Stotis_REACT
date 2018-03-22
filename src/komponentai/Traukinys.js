import React from 'react';
import axios from 'axios';
import Vagonai from './Vagonai'

class Traukinys extends React.Component{


    TraukinioTrinimas=()=>{
        
         axios.delete(`http://localhost:8080/traukiniai/`+this.props.traukinys.id)
           .then(res => {
             console.log(res);
             console.log(res.data);
             window.location.reload();
           })
    
    }


render(){
    let vagonai = this.props.traukinys.vagonai.map((vagonas)=>{
       

        return  <Vagonai key={vagonas.id} vagonas={vagonas}/>
        
    })
    return(
      
        
    
        <tbody>  
                    <tr>
            <td>id : {this.props.traukinys.id} </td>
            <td>Data pagaminimo: {this.props.traukinys.data} </td>
            <td>Gamintojas: {this.props.traukinys.gamintojas} </td>
            <td>Miestas: {this.props.traukinys.miestas} </td>
            <td>Vagonai:{vagonai}
            
                
                 </td>
           
            
            

           <td> <button onClick={this.TraukinioTrinimas} >delete</button></td>
            </tr>
            </tbody>

            
    )
}
}
export default Traukinys;