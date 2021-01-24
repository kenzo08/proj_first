import React from 'react';
import { Link } from 'react-router-dom';

class ChangePassword extends React.Component{
 render(){
   return(
     <div><h3>Change Password</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td className='float-right'>Current password</td>
              <td><input type='password' placeholder='***' /></td>
            </tr>
            <tr>
              <td className='float-right'>New password</td>
              <td><input type='password' placeholder='****' /></td>
            </tr>
            <tr>
              <td className='float-right'>Repeat password</td>
              <td><input type='password' placeholder='****' /></td>
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


export default ChangePassword;