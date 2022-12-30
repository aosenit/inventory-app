import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Shop.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { shopRows } from "../../DemoData";
import { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import { userRequest } from "../../apiRequests";
import ShopModal from "../../modals/ShopModal";
import { CircularProgress } from "@material-ui/core";

function Shop() {
  const [data, setData] = useState(shopRows);
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getShops = async () => {
      setLoading(true);
      try {
        const res = await userRequest.get(`/app/shop?page=1&keyword=${word}`);
        const shops = res.data.results;
        setData(shops);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.response);
      }
    };

    getShops();
  }, [word]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    // { field: 'id', headerName: 'ID', width: 150 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "created_by",
      headerName: "Created By",
      flex: 1,
      renderCell: (params) => <>{params?.value?.fullname}</>,
    },
    { field: "created_at", headerName: "Created On", flex: 1 },
    {
      field: "amount_total",
      headerName: "Total Sales(Price)",
      flex: 1,
      renderCell: (params) => (
        <>{params.value != null ? params.value : "Null"}</>
      ),
    },

    {
      field: "count_total",
      headerName: "Total Sales(Count)",
      flex: 1,
      renderCell: (params) => (
        <>{params.value != null ? params.value : "Null"}</>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <CreateIcon className="listEdit" />

            <DeleteOutlineIcon
              style={{ margin: "0 15px" }}
              className="listDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="shop layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ margin: "20px" }}>
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
            {/* <ShopModal /> */}
          </div>
        </div>

        <div className="contentTable">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <DataGrid
              rows={data}
              disableSelectionOnClick
              columns={columns}
              pageSize={10}
              checkboxSelection={false}
              rowsPerPageOptions={[5]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
