import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { invoiceRows } from '../../DemoData';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';

function InvoicePanel() {
  const [data, setData] = useState(invoiceRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'item',
      headerName: 'Item',
      flex: 1,
    },
    {
      field: 'unitprice',
      headerName: 'Unit Price',
      flex: 1.5,
    },
    {
      field: 'qty',
      headerName: 'Qty',
      flex: 1,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 1.2,
      renderCell: (params) => {
        return (
          <div style={{ display:'flex', alignItems: 'center'}}>
           {params.row.amount}
            <ClearIcon 
            style={{color:'red', marginLeft:'12px', cursor:'pointer'}}
            onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="contentTable">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection={false}
        headerHeight={70}
        className="editTable"
        autoHeight={true}
        hideFooter
      />

      <Paper className="invoiceFooter" 
      style={{
          display:'flex', 
          alignItems: 'center', 
          justifyContent:'space-between', 
          height:'70px',
          padding:'0 10px'
          }}>
        <div className="invoiceFooter__left">
          <h5 style={{ color:'var(--grayColor)'}}>Date Issued:</h5>
          <h4>10/07/2021</h4>
        </div>
        <div className="invoiceFooter__right">
          <Button variant='contained' className='topbarButton' style={{fontSize:'.7rem'}}>Print & Save</Button>
        </div>
      </Paper>
    </div>
  );
}

export default InvoicePanel;
