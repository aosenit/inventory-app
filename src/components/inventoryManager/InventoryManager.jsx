import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { inventoryRows } from '../../DemoData';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import MyModal from '../../Modal';

function InventoryManager({isInvoice}) {
   

     const [data, setData] = useState(inventoryRows);
    

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
         field: 'itemgroup',
         headerName: 'Item Group',
         flex: 1,
       },
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
         field: 'addOn',
         headerName: 'Added On',
         flex: 1,
       },
       {
         field: 'action',
         headerName: 'Action',
         flex: 1,
         renderCell: (params) => {
           return (
             <div style={{ display: 'flex', alignItems: 'center' }}>
               <CreateIcon className="listEdit" />

               <DeleteOutlineIcon
                 style={{ margin: '0 10px' }}
                 className="listDelete"
                 onClick={() => handleDelete(params.row.id)}
               />
               <VisibilityIcon className="listVisible" />
             </div>
           );
         },
       },
     ];

    return (
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
            <MyModal
              modalSelectName="Select a group"
              modalSelectTitle="Group or Category"
              modalButtonName="Add Item"
              modalTitle="Add Item"
              isImagePresent
              isSelectPresent
              isCountPresent
            />
          </div>
        </div>
        <div className="contentTable">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection={true}
            headerHeight={80}
            className="editTable"
            autoHeight={true}
          />
        </div>
      </div>
    );
}

export default InventoryManager
