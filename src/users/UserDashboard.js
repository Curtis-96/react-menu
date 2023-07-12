import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './UserDashboard.css';

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";
const BASE_URL = "https://www.youtube.com/watch?v=";

const userName = 'curt';

const UserDashboard = (props) => {
  let gate = useNavigate();

  // const newLocal = <Link to="/videos">Contact</Link>;
  return (
    <div className="App App-header">
      <header className="App-header">
        <h1>Tomfoolery.io</h1>
      </header>
      <div className='select'>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
        <div>
            <button onClick={gate(-1)}>Back</button>
        </div>
    </div>
  );
};

export default UserDashboard;
