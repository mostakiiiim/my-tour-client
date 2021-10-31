import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Login from './Pages/Home/Login/Firebase/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home';
import AddService from './Pages/AddService/AddService';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import Footer from './Shared/Footer/Footer';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home>

              </Home>
            </Route>
            <Route path="/home">
              <Home>

              </Home>
            </Route>
            <PrivateRoute path="/placeOrders/:serviceId">
              <PlaceOrder>

              </PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService>

              </AddService>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login>

              </Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
