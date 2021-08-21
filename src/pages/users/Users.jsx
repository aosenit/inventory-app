import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Users.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { userRows } from '../../DemoData';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import MyModal from '../../Modal';

function Users() {

      const [data, setData] = useState(userRows);

      const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };

      const columns = [
        // { field: 'id', headerName: 'ID', width: 150 },
        {
          field: 'user',
          headerName: 'Name',
          flex: 1,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: 'role', headerName: 'Role', flex: 1 },
        {
          field: 'created',
          headerName: 'Created On',
          flex: 1,
        },
        {
          field: 'lastloggedin',
          headerName: 'Last Logged In',
          flex: 1,
        },
        {
          field: 'action',
          headerName: 'Action',
          flex: 1,
          renderCell: (params) => {
            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CreateIcon className="userListEdit" />

                <DeleteOutlineIcon
                  style={{ margin: '0 15px' }}
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
                <VisibilityIcon className="userListVisible" />
              </div>
            );
          },
        },
      ];
    return (
      <div className="users layout">
        <Topbar />
        <Sidebar />
        <div className="main" style={{ background: 'white', margin: '20px' }}>
          <div className="content__leftTop">
            <h4>Users</h4>
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
              <MyModal
                modalSelectName="Select a User Role"
                modalSelectTitle="Role"
                modalButtonName="Add User"
                modalTitle="Add User"
                isSelectPresent
                autoHeight={true}
              />
            </div>
          </div>

          <div className="contentTable">
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    );
}

export default Users

