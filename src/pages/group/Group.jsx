import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './Group.css';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { groupRows } from '../../DemoData';
import { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import MyModal from '../../Modal';

function Group() {
  const [data, setData] = useState(groupRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'username',
      headerName: 'Name',
      flex: 1,
    },
    { field: 'belongs', headerName: 'Belongs To(Another Group)', flex: 1 },
    {
      field: 'createdOn',
      headerName: 'Created On',
      flex: 1,
    },
    {
      field: 'totalItems',
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
            <VisibilityIcon className="listVisible" />
          </div>
        );
      },
    },
  ];
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
              />
              <button type="submit">submit</button>
            </form>
            <MyModal
              modalSelectName="Select a Group"
              modalButtonName="Add Group"
              modalTitle="Add Group"
              modalSelectTitle="Belongs To"
              isSelectPresent
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
            autoHeight={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Group;



