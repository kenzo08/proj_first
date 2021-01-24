import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'

class LoginPage extends React.Component{
 render(){
   return(
     <div className='login-container'>
        <div className='login flex-end'>
            <div className='flexContainer login-input'>
                <div className='input-label'>E-mail</div> <div><input/></div>
            </div>
            <div>
                <div className='flexContainer login-input'>
                    <div className='input-label'>Password</div> <div><input/></div>
                </div>
            </div>
            <div class='login-buttonsContainer flexContainer flex-end'>
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </div>
     </div>
   );
  }
}


export default LoginPage;