import { ReactDOM, React, useState, useEffect } from 'react';
import axios from "axios";
import Icon from '@mdi/react';
import { MdFace, mdiAccount } from '@mdi/react';
import './Videos.css';

const Videos = (props) => {

const [videosList, setVideosList] = useState([]);
const [filteredList, setFilteredList] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const onSearch = () => {
console.log('search term', searchTerm);
const newList = searchTerm.length > 0 && videosList.filter(elem => (elem.snippet.title).includes(searchTerm));

if(newList) console.log(newList);
if(!newList) return;
setFilteredList(newList);
}

const fetchVideos = async () => {
const result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
    q: 'music',
    },
}); 

const answer = await fetch('https://api.multiavatar.com/'
+JSON.stringify(avatarId))
.then(res => res.text())
.then(svg => console.log(svg));
console.log(answer)
return result;
}

const handleInputChange = (event) => {
setSearchTerm(event.target.value);
};

useEffect(() => {
const videoFeed = fetchVideos().then(data => (setVideosList(data.data.items)));
setVideosList(videoFeed);
setFilteredList(videoFeed);
console.log('filteredlist', filteredList)
}, []);

const avatarId = 'Binx Bond';

console.log(videosList);

const API_KEY = "AIzaSyAojYUAOXXsTMnyA_wQSEHsflwa-oVLcIU";
const BASE_URL = "https://www.youtube.com/watch?v=";

return (
    <div className="App App-header">
        <header className="App-header">
        <h1>Videos: </h1>
        </header>
        <div className='App-body'>
            {/* <Icon path={MdFace}
            size={4}
            horizontal
            vertical
            rotate={90}
            color="red"
            /> */}
        <div className='App-search'>
            <input type="text" placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            />
            <button onClick={onSearch}>search</button>
        </div>
        {/* <Icon path={mdiAccount}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"/> */}
        {filteredList.map((elem) => 
            <div className='menu_item'>
            <a className='menu_item-link' href={`${BASE_URL}${elem.id.videoId}`}>
                <img className='menu_item-thumbnail' src={`${elem.snippet.thumbnails.default.url}`} />
            </a>
            </div>
            )
        }
        </div>
    </div>
);
}

export default Videos;