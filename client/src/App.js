import React, { Fragment, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/ProfileForm";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/profile-forms/EditProfile";
import "./App.css";
//Redux
import {Provider} from 'react-redux';

import store from './store';
import ProfileForm from "./components/profile-forms/ProfileForm";

if(localStorage.token){
  setAuthToken(localStorage.token)
}



const App = () => {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert/>    
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route
            path="/register"
            element={
              <section className="container">
                <Register />
              </section>
            }
          />
          <Route
            path="/login"
            element={
              <section className="container">
                <Login />
              </section>
            }
          />
           <Route
            path="/dashboard"
            element={
              <section className="container">
                <PrivateRoute component={Dashboard} />
              </section>
            }
          />

          <Route
            path="/create-profile"
            element={
              <section className="container">
                <PrivateRoute component={ProfileForm} />
              </section>
            }
          />

          <Route
            path="/edit-profile"
            element={
              <section className="container">
                <PrivateRoute component={ProfileForm} />
              </section>
            }
          />
        </Routes>
      </Router>
      </Provider>
    
  );
};

export default App;
