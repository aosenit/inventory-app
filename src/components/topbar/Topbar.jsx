import React from "react";
import "./Topbar.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { Box, ClickAwayListener } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

function Topbar() {
  const [open, setOpen] = useState(false);

  const { publicUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="topbar">
      <div className="topbarRight">
        {/* <Link to="/new-invoice">
           <Button variant="contained" className='topbarButton'>New Invoice</Button>
          </Link> */}

        <div className="topbarSelect">
          <Avatar
            className="selectAvatar"
            alt={publicUser.fullname.charAt(0)}
            src="c"
          />
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box className="usernameBox">
              <button type="button" onClick={() => setOpen((prev) => !prev)}>
                {publicUser.fullname}
              </button>

              {open ? (
                <Box onClick={handleLogout} className="logoutBox">
                  logout
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
