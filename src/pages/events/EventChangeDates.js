import React from 'react';
import { Link } from 'react-router-dom';

class EventChangeDates extends React.Component{

 render(){
   return(
     <div><h3>Change Dates</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td className='float-right'>Start date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>C1 date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>C+1 date</td>
              <td><input type='date' /></td>
            </tr>
            <tr>
              <td className='float-right'>Finish date</td>
              <td><input type='date' /></td>
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


export default EventChangeDates;