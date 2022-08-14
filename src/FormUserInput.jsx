import React, { useState } from 'react';

function FormUserInput(props) {
  let [column, updateColumn] = useState(0)
  let [line, updateLine] = useState(0)

  let columnInputHandler = (event) => {
    updateColumn(event.target.value);
  }

  let lineInputHandler = (event) => {
    updateLine(event.target.value);
  }

  let generateTableWithColumsLines = (event) => {
    event.preventDefault();      
    props.createLinesColumns(line, column);
    updateColumn(0);
    updateLine(0);
  }

  return (
    <form onSubmit={generateTableWithColumsLines}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">            
            <label htmlFor="columns" className="form-label">Columns:</label>            
            <input type="number" 
                   className="form-control" 
                   id="columns" 
                   value={column}
                   onChange={columnInputHandler} />
          </div>
          <div className="col-md-6">
            <label htmlFor="lines" className="form-label">Lines:</label>
            <input type="number" 
                   className="form-control" 
                   id="lines" 
                   value={line}
                   onChange={lineInputHandler} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <button type="submit" className="btn btn-secondary">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormUserInput;
