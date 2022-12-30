import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { DataGrid } from "@mui/x-data-grid";
import { shopRows } from "../../DemoData";
import { useState } from "react";
import { userRequest } from "../../apiRequests";
import { CircularProgress } from "@material-ui/core";

function UserActivity() {
  const [data, setData] = useState(shopRows);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserActivity = async () => {
      setLoading(true);
      try {
        const res = await userRequest.get("/user/activity-log");
        const userActivity = res.data.results;
        setData(userActivity);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.response);
      }
    };

    getUserActivity();
  }, []);

  const columns = [
    {
      field: "fullname",
      headerName: "User",
      flex: 1,
    },
    { field: "action", headerName: "Action", flex: 1 },
    { field: "created_at", headerName: "Created On", flex: 1 },
  ];

  return (
    <div className="user-activity layout">
      <Topbar />
      <Sidebar />
      <div className="main" style={{ margin: "20px" }}>
        <div className="content__leftTop">
          <h4>Users Activity Log</h4>
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

export default UserActivity;
