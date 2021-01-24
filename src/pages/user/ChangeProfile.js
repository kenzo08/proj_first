import React from 'react';
import { Link } from 'react-router-dom';
import personImage from '../../img/dain.jpg';

class ChangeProfile extends React.Component{
 render(){
   return(
     <div>
		<h3>Change Profile</h3>
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td rowspan='8'><img src={personImage} width="100" height="100"/><br/>
              <input type="file" className="form-control-file" /><br/>
              <input type="button" value="Delete" /></td>
              <td className='float-right'>First name</td>
              <td><input type='text' placeholder='Вася' /></td>
            </tr>
            <tr>
              <td className='float-right'>Last name</td>
              <td><input type='text' placeholder='Пупкин' /></td>
            </tr>
            <tr>
              <td className='float-right'>Country</td>
              <td><input type='text' placeholder='Россия' /></td>
            </tr>
            <tr>
              <td className='float-right'>About</td>
              <td><textarea /></td>
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


export default ChangeProfile;