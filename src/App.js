import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home/Home'
import Login from './Components/Login/Login';
import Orders from './Components/Dashboard/Orders/Orders';
import ServiceList from './Components/Dashboard/ServiceList/serviceList';
import Reviews from './Components/Dashboard/Reviews/Reviews';
import AllService from './Components/Admin/AllService/AllService';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>     
          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>        
          <PrivateRoute path="/reviews">
            <Reviews />
          </PrivateRoute>  
          <PrivateRoute path="/allService">
            <AllService />
          </PrivateRoute>  
          <PrivateRoute path="/addservice">
            <AddService />
          </PrivateRoute>  
          <PrivateRoute path="/orders/:id">
            <Orders />
          </PrivateRoute>  
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
