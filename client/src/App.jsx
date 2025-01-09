import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import DashBoard from '../components/Dashboard.jsx';
import Register from './components/Register.jsx';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Register}/>
          <Route path='/register'  Component={Register}/>
          <Route path='/dashboard' Component={DashBoard}/>
        </Routes>
        <Outlet/>
      </Router>
    </>
  )
}
