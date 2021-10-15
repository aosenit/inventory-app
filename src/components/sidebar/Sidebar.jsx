import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import StopIcon from '@material-ui/icons/Stop';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ShopIcon from '@material-ui/icons/Shop';
import Navbar from '../navbar/Navbar';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <StopIcon style={{ color: '#00E85D', fontSize: '30px' }} />
        <h4>INVENTORY</h4>
      </div>
      <div className="sidebar__nav">
        <NavLink to="/dashboard" exact activeClassName="selected">
          <Navbar logo={<DashboardIcon />} option={'Dashboard'} />
        </NavLink>

        <NavLink exact to="/inventory" activeClassName="selected">
          <Navbar logo={<StoreIcon />} option={'Inventory'} />
        </NavLink>

        <NavLink exact to="/purchases" activeClassName="selected">
          <Navbar logo={<ShoppingCartIcon />} option={'Purchase'} />
        </NavLink>

        <NavLink exact to="/group" activeClassName="selected">
          <Navbar logo={<InsertDriveFileIcon />} option={'Group'} />
        </NavLink>

        <NavLink exact to="/users" activeClassName="selected">
          <Navbar logo={<GroupAddIcon />} option={'Users'} />
        </NavLink>

        <NavLink exact to="/shop" activeClassName="selected">
          <Navbar logo={<ShopIcon />} option={'Shop'} />
        </NavLink>

        <NavLink exact to="/user-activity" activeClassName="selected">
          <Navbar logo="#" option={'UserActivity'} />
        </NavLink>

        
      </div>
    </div>
  );
}

export default Sidebar;
