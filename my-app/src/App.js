import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Map from './Map';

const array = ['stuff1', 'stuff2', 'stuff3', 'stuff4'];
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  const [videosList, setVideosList] = useState([]);

  const fetchVideos = async () => {
    const result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
        q: 'music',
      },
    }); 

    return result;
  }

  useEffect(() => {
    const vidoFeed = fetchVideos().then(data => (setVideosList(data.data.items)));
  }, []);

  console.log(videosList);

  return (
    <div className="App App-header">
      <header className="App-header">
       <h1>Restaurateur.io</h1>
      </header>
      <Map />
      {videosList.map((elem) => 
        <div className='menu_item'>
          <a href='https://www.youtube.com/'>{elem.snippet.channelId}</a>
        </div>
        )
      }
      
    </div>
  );
}

export default App;
