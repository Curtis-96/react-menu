import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import { ReactSVG } from "react-svg";
import {fetchAvatar} from '../utils/data';
import robot from '../robot.svg';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, withRouter } from 'react-router-dom';
import './UserDashboard.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://www.youtube.com/watch?v=";

const userName = 'curt';

const UserDashboard = (props) => {
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const fetchAvatar = async() => {
      let avatarId = 'Binx Bond.png'
        fetch('https://api.multiavatar.com/'
        +JSON.stringify(avatarId))
        .then(res => res.text())
        .then(svg => console.log(svg));
    };

    const avatarSVG = fetchAvatar();
    setAvatar(avatarSVG);

  }, []);

  // const newLocal = <Link to="/videos">Contact</Link>;
  return (
    <div>
      <h1>Welcome world</h1>
      <Link to={'/'}>
        <button>Back button</button>
      </Link>
      <div>
      {robot && (
        <ReactSVG src={robot}/>
      )}
      </div>
    </div>
  );
};

export default UserDashboard;
