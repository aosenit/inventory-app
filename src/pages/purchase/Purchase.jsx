import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Purchase.css';
import { DataGrid } from '@material-ui/data-grid';
import { purchaseRows } from '../../DemoData';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


function Purchase() {
  const [data, setData] = useState(purchaseRows);

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
      field: 'quantity',
      headerName: 'Quantity',
      flex: .5,
    },
    { field: 'price', headerName: 'Price', flex: 1 },
    {
      field: 'shop',
      headerName: 'Shop',
      flex: 1,
    },
    {
      field: 'purchaseMade',
      headerName: 'Purchase Made',
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
                backgroundColor: 'var(--darkGreen)',
                fontSize: '.75rem',
              }}
            >
              View Receipt
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="purchase layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ background: 'white', margin: '20px' }}>
        <div className="content__leftTop">
          <h4>Inventory Management</h4>
          <div className="content__rightTop">
            <form className="content__searchBar">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                className="content__SearchBarInput"
                placeholder="Search"
              />
              <button type="submit">submit</button>
            </form>

            <div>
              <Button variant="contained" color="primary" className="export">
                Export
              </Button>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Purchase;
