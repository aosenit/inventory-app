import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { inventoryRows } from '../../DemoData';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { userRequest } from '../../apiRequests';
import InventoryModal from '../../modals/InventoryModal';

function InventoryManager() {
  const [data, setData] = useState(inventoryRows);
  const [word, setWord] = useState('');

  useEffect(() => {
   const getInventory = async() => {
       
    try {
      const res =  await userRequest.get(`/app/inventory?page=1&keyword=${word}`)
      const inventorydata = (res.data.results)
      setData(inventorydata)
      
    } catch (error) {
 
      console.log(error.response)
    } 

   }

   getInventory()
  }, [word])
   

    
    

     const handleDelete = (id) => {
       setData(data.filter((item) => item.id !== id));
     };

     const columns = [
       {
         field: 'code',
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
       { field: 'name', headerName: 'Item Name', flex: 1 },
    
       {
         field: 'price',
         headerName: 'Price',
         flex: 1,
       },
       {
        field: 'total',
        headerName: 'Total',
        flex: 1,
      },
       {
         field: 'remaining',
         headerName: 'Remaining',
         flex: 1,
       },
       {
         field: 'created_at',
         headerName: 'Added On',
         flex: 1,
       },

       {
        field: 'added_by',
        headerName: 'Added By',
        flex: 1,
        renderCell: (params) => <>{params.value !=null ? params.value.fullname : "ade"}</>
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
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Search"
              />
              <button type="submit">submit</button>
            </form>

            <div>
              <Button variant="contained" color="primary" className="export">
               Add Excel
              </Button>
            </div>
            <InventoryModal />
          </div>
        </div>
        <div className="contentTable">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection={false}
            headerHeight={80}
            className="editTable"
            autoHeight={true}
          />
        </div>
      </div>
    );
}

export default InventoryManager
