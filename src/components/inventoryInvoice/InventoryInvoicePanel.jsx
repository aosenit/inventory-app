import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { inventorypanelRows } from '../../DemoData';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

function InventoryInvoicePanel() {
  const [data, setData] = useState(inventorypanelRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'itemcode',
      headerName: 'Item Code',
      flex: 1,
    },
    {
      field: 'photo',
      headerName: 'Photo',
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="listInventory">
            <img className="listImg" src={params.row.photo} alt="" />
          </div>
        );
      },
    },
    { field: 'itemname', headerName: 'Item Name', flex: 1 },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
    },
    {
      field: 'remaining',
      headerName: 'Remaining',
      flex: 1,
    },

    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant="contained"
              style={{
                color: 'white',
                color: 'var(--darkGreen)',
                fontSize: '.75rem',
                backgroundColor:'var(--lightGreen)'
              }}
            >
              + <span style={{ marginLeft: '15px' }}>Add</span>
            </Button>
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
      />
    </div>
  );
}

export default InventoryInvoicePanel;
