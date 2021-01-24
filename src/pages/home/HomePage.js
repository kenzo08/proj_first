import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
 render(){
   return(
     <div><h3>Home Page</h3>
      <p>
          <button>
            <Link to='/login'>Login</Link>
          </button> 
          <button>
            <Link to='/admin'>Admin</Link>
          </button> 
      </p>  
     </div>
   );
  }
}


export default HomePage;