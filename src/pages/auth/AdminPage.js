import React from 'react';
import { Link } from 'react-router-dom';

class AssignPage extends React.Component{

 render(){
   return(
     <div>Admin
        <div>
        <p>Users</p>
          <button>
            <Link to='/admin'>Browse</Link>
          </button> 
          <button>
            <Link to='/registration'>Create</Link>
          </button> 
          <button>
            <Link to='/assign'>Assign</Link>
          </button>
        </div>

        <div>
        <p>Events</p>
          <button>
            <Link to='/events'>Browse</Link>
          </button> 
          <button>
            <Link to='/events/eventnew'>Create</Link>
          </button> 
          <button>
            <Link to='/assign'>Assign</Link>
          </button>
        </div>

        <div>
        <p>Documents</p>
          <button>
            <Link to='/docs'>Browse</Link>
          </button> 
          <button>
            <Link to='/docs/docnew'>Create</Link>
          </button> 
          <button>
            <Link to='/admin'>Download</Link>
          </button>
        </div>
     </div>
   );
  }
}


export default AssignPage;