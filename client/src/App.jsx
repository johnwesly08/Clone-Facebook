import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from '../components/login.jsx'
import SignUp from '../components/signup.jsx';
import DashBoard from '../components/Dashboard.jsx';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Login}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/signup'  Component={SignUp}/>
          <Route path='dashboard' Component={DashBoard}/>
        </Routes>
        <Outlet/>
      </Router>
    </>
  )
}
