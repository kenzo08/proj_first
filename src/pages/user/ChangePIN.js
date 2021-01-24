import React from 'react';
import { Link } from 'react-router-dom';

class ChangePIN extends React.Component{
 render(){
   return(
     <div><h3>Change PIN</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td className='float-right'>PIN</td>
              <td><input type='text' placeholder='PIN' /></td>
            </tr>
            <tr>
            <td></td>
              <td><button>
                    <Link to='/user'>Ok</Link>
                  </button> 
                  <button>
                    <Link to='/user'>Cancel</Link>
                  </button>
              </td>
            </tr>
          </tbody>
        </table>
     </div>
   );
  }
}


export default ChangePIN;