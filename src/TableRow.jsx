import React from 'react'
import TableColumn from './TableColumn'
import createArray from './utilities';

function TableRow(props) {
  const column = Number(props.columnCount);
  const columns =  createArray(column);
  
  return (
    <tbody>
      <tr>
        {
          columns.map((value, index) => {            
            return (<TableColumn key={index} />)
          })
        }
      </tr>
    </tbody>
  )
}

export default TableRow;
