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
import ServiceList from './Components/Dashboard/serviceList/serviceList';
import Reviews from './Components/Dashboard/Reviews/Reviews';
import AllService from './Components/AdminPanel/AllService/AllService';
import AddService from './Components/AdminPanel/AddService/AddService';
import MakeAdmin from './Components/AdminPanel/MakeAdmin/MakeAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route> 

    
          <PrivateRoute path="/orders/:id">
            <Orders />
          </PrivateRoute>    
          

          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>
        
          <PrivateRoute path="/reviews">
            <Reviews />
          </PrivateRoute>  
          <PrivateRoute path="/allService">
            <AllService />
          </PrivateRoute>  
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>  
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
