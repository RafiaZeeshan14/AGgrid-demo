"use client";

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from "ag-grid-community";

const AgGridTable = () => {
  const [colDefs] = useState<ColDef[]>([
    { headerName: "CarName", field: "carname" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
    { headerName: "Color", field: "color" },
  ]);

  const [rowData] = useState([
    { carname: "Toyota", model: "Celica", price: 35000 , color:"white" },
    { carname: "Ford", model: "Mondeo", price: 32000  , color:"black"},
    { carname: "Porsche", model: "Boxster", price: 72000 , color:"blue" },
  ]);

  return (
    <div
      className="ag-theme-quartz"
      style={{ height: 200, textAlign: "center" ,  }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={{
          sortable: true,
          filter: true,
          editable: true,
        }}
      />
    </div>
  );
};

export default AgGridTable;
