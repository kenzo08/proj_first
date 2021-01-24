import React from 'react';
import { Link } from 'react-router-dom';
import eventImage from '../../img/placeholder.png';
import personImage from "../../img/regimg.png";

class EventNew extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      labels: ['Event Title', 'Start Date', 'C1 Date', 'C+1 Date', 'Finish Date']
    }
  }
 render(){
   return(
     <div><h3>New Event</h3>
       <div className='flexContainer flex-around'>
         <div className='left-block'>
           <div>
             <img src={eventImage} width="100" height="100"/>
             <br/>
             <input type="button" value='upload' className='itemInput'/><br/>
             <input type="button" value="Delete" className='itemInput'/>
           </div>
         </div>
         <div className='right-block'>
           {this.state.labels.map((item) => (
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


export default EventNew;