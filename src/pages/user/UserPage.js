import React from 'react';
import { Link } from 'react-router-dom';
import personImage from '../../img/dain.jpg';


class UserPage extends React.Component{

constructor() {
    super();
    this.state = {
      email: 'vasyaPypkin@mail.ru',
      password: '*****',
      firstName: 'Vasya',
      lastName: 'Pypkin',
      country: 'Russia',
      about: 'Bla bla bla',
      pin: ''
    };
  }
 render(){
   return(
     <div className="profile">
      <h3>Username</h3>
		  <div className='userimage'>
        <img src={personImage}/>
      </div>
      <div className='userinfo d-flex flex-column align-items-center'>
        <h5>Login information</h5>
          <span>Email: {this.state.email}</span>
          <span>Password: {this.state.password}</span>
          <button>
            <Link to='/user/changePassword'>
                Change Password
            </Link>
          </button>
      </div>
      <div className='userinfo d-flex flex-column align-items-center'>
        <h5>Profile information</h5>
          <span>First Name: {this.state.firstName}</span>
          <span>Last Name: {this.state.lastName}</span>
          <span>Country: {this.state.country}</span>
          <span>About: {this.state.about}</span>
          <button>
            <Link to='/user/changeProfile'>
                Change profile information
            </Link>
          </button>
      </div>
      <div className='userinfo d-flex flex-column align-items-center'>
        <h5>Personal identification number</h5>
          <span>PIN: {this.state.pin}</span>
          <button><Link to='/user/changePIN'>Set PIN</Link></button>
      </div>
     </div>
   );
  }
}


export default UserPage;