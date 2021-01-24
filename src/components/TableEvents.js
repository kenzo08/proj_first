import React from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class TableEvents extends React.Component{

 render(){
   return(
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="80">
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='event' tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
            Event
          </TableHeaderColumn>
          <TableHeaderColumn dataField='dates' tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
            Dates
          </TableHeaderColumn>
          <TableHeaderColumn dataField='participants'>
            Participants
          </TableHeaderColumn>
        </BootstrapTable>
   );
  }
}


export default TableEvents;