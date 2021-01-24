import React from 'react';
import { Link } from 'react-router-dom';

class DocPage extends React.Component{

 render(){
   return(
     <div><h3>Document</h3>
      <div className='userinfo'>
        <h5>Document information</h5>
          <p>Document title: Doc1</p>
          <p>Day: C1</p>
          <p>Documen content: Bla bla bla</p>
          <p>For: Exparts</p>
        <button><Link to='/docs'>Ok</Link></button>
        <button><Link to='/docs'>Cancel</Link></button>
        <button><Link to='/docs'>Delete</Link></button>
      </div>
     </div>
   );
  }

}


export default DocPage;