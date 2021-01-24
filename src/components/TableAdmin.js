import React from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class TableAdmin extends React.Component{
  cellButton(cell, row, enumObject, rowIndex) {
    return (
       <button 
          type="button" 
          onClick={() => 
          this.onClickSelected(cell, row, rowIndex)}
       >
       Assign
       </button>
    )
 }
  onClickSelected(cell, row, rowIndex){
   console.log('Click #', rowIndex);
  }

 render(){
   return(
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='id' width="80">
            UserID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='user' tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
            Username
          </TableHeaderColumn>
          <TableHeaderColumn dataField='event' tdStyle={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
            Event
          </TableHeaderColumn>
          <TableHeaderColumn dataField='role'>
            Role
          </TableHeaderColumn>
          <TableHeaderColumn dataField='assign' dataFormat={this.cellButton.bind(this)}>
            Assign
          </TableHeaderColumn>
        </BootstrapTable>
   );
  }
}


export default TableAdmin;