import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Group.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { groupRows } from '../../DemoData';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import { userRequest } from '../../apiRequests';
import GroupModal from '../../modals/GroupModal';
import { CircularProgress } from '@material-ui/core';


function Group() {
  const [data, setData] = useState(groupRows);
  const [word, setWord] = useState('');
  const [loading, setLoading] = useState(false)


  useEffect(() => {
   const getGroup = async() => {
       setLoading(true)
    try {
      const res =  await userRequest.get(`/app/group?page=1&keyword=${word}`)
      // console.log( res.data.results)
      const group = (res.data.results)
      setData(group)
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    } 

   }

   getGroup()
  }, [word])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    { field: 'belongs_to', headerName: 'Belongs To(Another Group)', flex: 1, 
    renderCell: (params) => <>{"Null"}</> },
    {
      field: 'created_at',
      headerName: 'Created On',
      flex: 1,
    },
    {
      field: 'created_by',
      headerName: 'Created By',
      flex: 1,
      renderCell: (params) => <>{params.value ? (params.value.fullname) : ""}</>
    },
    {
      field: 'total_items',
      headerName: 'Total Items',
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
              style={{ margin: '0 15px' }}
              className="listDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];


  if (loading){
    return <CircularProgress color="inherit" />
  }

  return (
    <div className="shop layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ background: 'white', margin: '20px' }}>
        <div className="content__leftTop">
          <h4>Shops</h4>
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
            <GroupModal />
          </div>
        </div>

        <div className="contentTable">
          <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection={false}
            autoHeight={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Group;



