import React from 'react';
import { Link } from 'react-router-dom';

class EventChangeTitle extends React.Component{

 render(){
   return(
     <div><h3>Change Title</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td className='float-right'>Event title</td>
              <td><input type='text' placeholder='GobGod' /></td>
            </tr>
            <tr>
            <td></td>
              <td><button>
                    <Link to='/events/event'>Ok</Link>
                  </button> 
                  <button>
                    <Link to='/events/event'>Cancel</Link>
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }

}


export default EventChangeTitle;