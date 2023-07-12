import logo from './logo.svg';
import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Videos from './videos/Videos';
import './App.css';
import UserDashboard from './users/UserDashboard';

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";
const BASE_URL = "https://www.youtube.com/watch?v=";

const userName = 'curt';


const App = (props) => {
  let gate = useNavigate();

  const Navigate = (path) => {
    gate(path);
  }

  // const newLocal = <Link to="/videos">Contact</Link>;
  return (
    <div className="App App-header">
      <header className="App-header">
        <h1>Tomfoolery.io</h1>
      </header>
      <div className='select'>
        <button onClick={Navigate('/videos')}>Button 1</button>
        <button onClick={Navigate('/users')}>Button 2</button>
      </div>
        <Routes>
          <Route path="/users" component={UserDashboard} />
          <Route path="/videos" component={Videos} />
        </Routes>
    </div>
  );
};

export default App;
