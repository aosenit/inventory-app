import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Purchase.css';
import { DataGrid } from '@mui/x-data-grid';
import { purchaseRows } from '../../DemoData';
import SearchIcon from '@material-ui/icons/Search';
import PurchaseModal from '../../modals/PurchaseModal';
import { publicRequest } from '../../apiRequests';


function Purchase() {
  const [data, setData] = useState(purchaseRows);
  const [word, setWord] = useState('');

  useEffect(() => {
    const getPurchase = async() => {
        
     try {
      const res =  await publicRequest.get(`/app/inventory?page=1&keyword=${word}`)
       const purchase = (res.data.results)
       setData(purchase)
       
     } catch (error) {
  
       console.log(error.response)
     } 
 
    }
 
    getPurchase()
   }, [word])

 

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150 ,
    },
    {
      field: 'created_by',
      headerName: 'Created By',
      flex: 1,
      renderCell: (params) => <>{params.value !=null ? params.value.fullname : "Adedoyin"}</>
    },
    { field: 'price', headerName: 'Price', flex: 1 },
    {
      field: 'total',
      headerName: 'Total Item',
      flex: 1,
      renderCell: (params) => <>{params.value !=null ? params.value : 0}</>
    },
    {
      field: 'created_at',
      headerName: 'Created On',
      flex: 1,
      renderCell: (params) => <>{params.value !=null ? (params.value) : "28/5/2021"}</>
    },

    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PurchaseModal />
            {/* <Button
              variant="contained"
              style={{
                color: 'white',
                backgroundColor: 'var(--darkGreen)',
                fontSize: '.75rem',
              }}
            >
              View Receipt
            </Button> */}
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
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <button type="submit">submit</button>
            </form>
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
