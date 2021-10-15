import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { inventorypanelRows } from '../../DemoData';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { userRequest } from '../../apiRequests';
import { useDispatch } from 'react-redux';
import { receipt } from '../../redux/invoiceSlice';
import { CircularProgress } from '@material-ui/core';

function InventoryInvoicePanel({ word}) {
  
  const dispatch = useDispatch()
  const [data, setData] = useState(inventorypanelRows);
  const [loading, setLoading] = useState(false)
 
  
  useEffect(() => {
    const getNewInvoice = async() => {   
     setLoading(true)
     try {
       const res =  await userRequest.get(`/app/inventory?page=1&keyword=${word}`)
       const newInvoice = (res.data.results)
       setData(newInvoice) 
       setLoading(false)
      
       
     } catch (error) {
      setLoading(false)
       console.log(error.response)
     } 
 
    }
 
    getNewInvoice()
   }, [ word])


   const handleAdd = (id) => {
    const reciept = data.filter((item) => item.id === id);
    const recieptData = {
      name: reciept[0].name,
      price: reciept[0].price,
      id: reciept[0].code,
      qty: 1, 
      remaining: reciept[0].remaining,
    }
    dispatch(receipt(recieptData))

   }


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
              onClick={() => handleAdd(params.row.id)}
              style={{
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

  if (loading){
    return <CircularProgress color="inherit" />
  }

 
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
