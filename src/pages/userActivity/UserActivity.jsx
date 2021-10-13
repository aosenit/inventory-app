import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { shopRows } from '../../DemoData';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MyModal from '../../Modal';
import { userRequest } from '../../apiRequests';

function UserActivity() {
  const [data, setData] = useState(shopRows);
  

  useEffect(() => {
    const getUserActivity = async() => {
        
     try {
       const res =  await userRequest.get("/user/activity-log")
       const userActivity = (res.data.results)
       setData(userActivity)
       
     } catch (error) {
  
       console.log(error.response)
     } 
 
    }
 
    getUserActivity()
   }, [])

  

  const columns = [
   
    {
      field: 'fullname',
      headerName: 'User',
      flex: 1,
    },
    { field: 'action', headerName: 'Action', flex: 1},
    { field: 'created_at', headerName: 'Created On', flex: 1 },
    
  
  ];
  return (
    <div className="user-activity layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ background: 'white', margin: '20px' }}>
        <div className="content__leftTop">
          <h4>Users Activity Log</h4>
        </div>

        <div className="contentTable">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection={false}
          />
        </div>
      </div>
    </div>
  );
}

export default UserActivity;
