import logo from './logo.svg';
import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, withRouter, NavLink, Switch } from 'react-router-dom';
import './App.css';
import UserDashboard from './users/UserDashboard';
import Videos from './videos/Videos';

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";
const BASE_URL = "https://www.youtube.com/watch?v=";

const userName = 'curt';


const App = () => {

  const Home = () => {
    return(
      <div>
      <header className="App-header">
        
        <Link to="/" className='App-header-logo'>
          <h1>Tomfoolery.io</h1>
        </Link>
      </header>
      <div className='select'>
      </div>
      </div>
    );
  };

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <Link to='/videos' className="sidebar-link">
          <p>Videos</p>
        </Link>
        <Link to='/users' className="sidebar-link">
          <p>Users</p>
        </Link>
      </div>
    );
  };

  return (
    <div className="App App-header">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserDashboard />} />
        <Route path='/videos' element={<Videos />} />
      </Routes>
      <Sidebar />
    </div>
  );
};

export default App;
