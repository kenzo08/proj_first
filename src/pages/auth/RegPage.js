import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import personImage from '../../img/regimg.png';

class RegPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            labels: ['First Name', 'Last Name', 'Country', 'Email', 'Password', 'Repeat password']
        }
    }

 render(){
   return(
     <div><h3>Registration</h3>
       <div className='flexContainer flex-around'>
         <div className='left-block'>
           <div>
               <img src={personImage} width="100" height="100"/>
               <br/>
               <input type="button" value='upload' className='itemInput'/><br/>
               <input type="button" value="Delete" className='itemInput'/>
           </div>
         </div>
         <div className='right-block'>
             {this.state.labels.map((item)=>(
                 <div className='flexContainer flex-end'>
                     <div className='item'>{item}</div><div className='itemInput'><input/></div>
                 </div>
             ))}
         </div>
       </div>
     </div>
   );
  }
}


export default RegPage;