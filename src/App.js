import logo from './logo.svg';
import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";

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
       <h1>React Menu App</h1>
      </header>
      <div className='App-body'>
        {videosList.map((elem) => 
          <div className='menu_item'>
            <a href='https://www.youtube.com/'>{elem.snippet.channelId}</a>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
