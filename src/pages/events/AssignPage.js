import React from 'react';
import TableAdmin from '../../components/TableAdmin';
import { Link } from 'react-router-dom';

var data = [
  {user: 'Gob', event: 'GobsJob', role: 'Expert'},
  {user: 'Buster', event: 'GobsJob', role: 'Competitor'},
  {user: 'George Michael', event: 'GobsJob', role: 'Competitor'}
];

class AssignPage extends React.Component{

 render(){
   return(
     <div><h3>Assign</h3>
        <TableAdmin data={data} />
        <button><Link to='/admin'>Ok</Link></button> 
        <button><Link to='/admin'>Cancel</Link></button>
     </div>
   );
  }
}


export default AssignPage;