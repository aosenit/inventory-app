import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Group from './pages/group/Group';
import Inventory from './pages/inventory/Inventory';
import Shop from './pages/shop/Shop';
import Users from './pages/users/Users';
import Dashboard from './pages/dashboard/Dashboard';
import './app.css';
import Purchase from './pages/purchase/Purchase';
import LoginPage from './pages/LoginPage';
import SelectShop from './pages/SelectShop';
import CreateUser from './pages/createUser/CreateUser';

function App() {
  const user = true;
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!user ? <LoginPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/group">
            <Group />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/purchases">
            <Purchase />
          </Route>
          <Route path="/selectShop">
            <SelectShop />
          </Route>

          <Route path="/create-user">
            <CreateUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
