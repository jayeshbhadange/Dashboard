// StocksTable.js
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "ag-grid-community/styles/ag-theme-quartz.css";
const StocksTable = () => {
  const [rowData] = useState([
    { symbol: 'AAPL', name: 'Apple', price: 150 },
    { symbol: 'GOOGL', name: 'Google', price: 2800 },
    { symbol: 'AMZN', name: 'Amazon', price: 3400 },
  ]);

  const [columnDefs] = useState([
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Price', field: 'price' },
  ]);

  return (
    <div className="ag-theme-quartz-dark" style={{ height: 200, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default StocksTable;
