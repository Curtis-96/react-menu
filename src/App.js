import logo from './logo.svg';
import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";
const BASE_URL = "https://www.youtube.com/watch?v=";

const Home = () => <h1>Welcome to the Home page!</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const userName = 'curt';

const App = () => {
  return (
    <div className="App App-header">
      <header className="App-header">
        <h1>Tomfoolery.io</h1>
      </header>
      <div className='select'>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
