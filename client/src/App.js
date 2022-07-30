import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';

const App = () =>  {
  
 return( 
  
 <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Landing />} /> 
        <section className='container'>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        </section>
      </Routes>
</Router> 
 );
     
 
};

export default App;
