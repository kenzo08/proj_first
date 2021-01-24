import React from 'react';
import { Link } from 'react-router-dom';
import TableDocs from '../../components/TableDocs';

var data = [
  {document: 'Doc1', day: 'C1', for: 'Experts'},
  {document: 'Doc2', day: 'C1', for: 'Competitors'},
  {document: 'Doc3', day: 'C+1', for: 'Competitors'}
];

class DocsPage extends React.Component{

 render(){
   return(
     <div><h3>Documents</h3>
      <TableDocs data={data}/>
          <button>
            <Link to='/docs/docnew'>Add documents</Link>
          </button>
     </div>
   );
  }

}


export default DocsPage;