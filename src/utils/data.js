import axios from "axios";
import { ReactDOM, React, useState, useEffect } from 'react';

    const BASE_URL = "https://www.youtube.com/watch?v=";
    const API_KEY = process.env.REACT_APP_API_KEY;

    const fetchUsers = async() => {
       const users = await fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
        console.log(data.results);  // array of user objects
        })
        .catch(error => {
        console.error('Error fetching users:', error);
        });

        return users;
    }

    const fetchAvatar = async() => {
        let avatarId = 'Binx Bond.png'
        fetch('https://api.multiavatar.com/'
        +JSON.stringify(avatarId))
        .then(res => res.text())
        .then(svg => console.log(svg));

        return avatarId;
    };

     const fetchVideos = async() => {
        const result = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: API_KEY,
                q: 'music',
            },
        });
        return result;
    };
    
     const search = async(searchTerm, list) => {
        const newList = searchTerm.length > 0 && list.filter(elem => (elem.snippet.title).includes(searchTerm));
        
        return newList;
    };

export { search, fetchVideos, fetchAvatar, fetchUsers, API_KEY, BASE_URL };