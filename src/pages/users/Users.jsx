import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Users.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { userRows } from "../../DemoData";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { userRequest } from "../../apiRequests";
import UsersModal from "../../modals/UsersModal";
import { CircularProgress } from "@material-ui/core";

function Users() {
  const [data, setData] = useState(userRows);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await userRequest.get(`/user/users?page=1&keyword=${word}`);
        const users = res.data.results;
        setData(users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.response);
      }
    };

    getUsers();
  }, [word]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 150 },
    {
      field: "fullname",
      headerName: "Name",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.avatar && (
              <img className="userListImg" src={params.row.avatar} alt="" />
            )}
            {params.row.fullname}
          </div>
        );
      },
    },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "created_at",
      headerName: "Created On",
      flex: 1,
    },
    {
      field: "last_login",
      headerName: "Last Logged In",
      flex: 1,
      renderCell: (params) => (params.value != null ? params.value : "Null"),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <DeleteOutlineIcon
              style={{ margin: "0 15px" }}
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ margin: "20px" }}>
        <div className="content__leftTop">
          <h4>Users</h4>
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
            <UsersModal />
          </div>
        </div>

        <div className="contentTable">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection={false}
                rowsPerPageOptions={[5]}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
