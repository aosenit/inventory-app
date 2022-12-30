import { BrowserRouter as Router, Switch } from "react-router-dom";
import Group from "./pages/group/Group";
import Inventory from "./pages/inventory/Inventory";
import Shop from "./pages/shop/Shop";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import Purchase from "./pages/purchase/Purchase";
import SelectShop from "./pages/SelectShop";
import HomePage from "./pages/HomePage";
import PublicRoute from "./routesFolder/PublicRoute";
import PrivateRoute from "./routesFolder/PrivateRoute";
import InventoryInvoice from "./components/inventoryInvoice/InventoryInvoice";
import Loading from "./pages/Loading";
import UpdatePassword from "./pages/createUser/UpdatePassword";
import UserActivity from "./pages/userActivity/UserActivity";
import LoginUserPage from "./pages/users/LoginUserPage";
import CreateUserPage from "./pages/createUser/CreateUserPage";

function App({ children }) {
  return (
    <div className="app">
      <Router>
        <Switch>
          <PublicRoute
            restricted={false}
            component={HomePage}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={true}
            component={Loading}
            path="/loading"
            exact
          />

          <PublicRoute
            restricted={true}
            component={UpdatePassword}
            path="/update-password"
            exact
          />

          <PublicRoute
            restricted={true}
            component={LoginUserPage}
            path="/login"
            exact
          />
          <PublicRoute
            restricted={true}
            component={CreateUserPage}
            path="/create-user"
            exact
          />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={Group} path="/group" exact />
          <PrivateRoute component={Inventory} path="/inventory" exact />
          <PrivateRoute component={Shop} path="/shop" exact />
          <PrivateRoute component={Users} path="/users" exact />
          <PrivateRoute component={Purchase} path="/purchases" exact />
          <PrivateRoute component={SelectShop} path="/select-shop" exact />
          <PrivateRoute component={UserActivity} path="/user-activity" exact />
          <PrivateRoute
            component={InventoryInvoice}
            path="/new-invoice"
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
