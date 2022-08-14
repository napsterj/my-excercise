import React, { useEffect, useState } from 'react';
import './Excercise.css';
import TableRow from './TableRow'
import createArray from './utilities';
import FormUserInput from './FormUserInput'

function Excercise() {
  let [rowArray, updateLine] = useState([])
  let [columnArray, updateColumn] = useState([])

  let assignLinesColums = (lines, columns) => {
    updateLine(createArray(lines));
    updateColumn(createArray(columns));
  }

  useEffect(() => {
    console.log(rowArray)
    console.log(columnArray)
  }, [rowArray, columnArray])

  return (
    <div className="container m-5">
      <div className="row">
        <div className="card g-0 text-bg-info col-md-12" style={{ height: "400px", width: "1600px" }}>
          <table className="table table-bordered g-0 position-absolute
               (rowArray.length === 0) ? 'd-none' : 'd-block'"
            style={{ height: "400px" }}>
            {
              rowArray?.map((line, index) => {
                return (<TableRow columnCount={columnArray.length} createColumns={createArray} key={index} />)
              })
            }
          </table>
        </div>
      </div>
      <div className="row m-5">
        <FormUserInput createLinesColumns={assignLinesColums} />
      </div>
    </div>
  )
}

export default Excercise;
