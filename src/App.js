import burger from './burger.svg';
import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, withRouter, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Map from './map/Map';
import UserDashboard from './users/UserDashboard';
import Videos from './videos/Videos';
import AppHeader from './AppHeader';
import MapContainer from './map/MapContainer';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://www.youtube.com/watch?v=";

const App = () => {

  const Home = () => {
    return(
      <div className='app-container'>
      </div>
    );
  };

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <Link to='/map' className="sidebar-link">
          <p>Map</p>
        </Link>
        <Link to='/users' className="sidebar-link">
          <p>Users</p>
        </Link>
      </div>
    );
  };

  return (
    <div className="App App-header">
      <AppHeader title="Restaurateur.io" />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<MapContainer />} />
        <Route path='/users' element={<UserDashboard />} />
        <Route path='/videos' element={<Videos />} />
      </Routes>
    </div>
  );
};

export default App;
