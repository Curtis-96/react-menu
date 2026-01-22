
    const fetchUsers = async() => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=5');
            const data = await response.json();
            // return the array of user objects
            return data.results || [];
        } catch (error) {
            console.error('Error fetching users:', error);
            return [];
        }
    };

    const fetchAvatar = async() => {
        let avatarId = 'Binx Bond.png'
        fetch('https://api.multiavatar.com/'
        +JSON.stringify(avatarId))
        .then(res => res.text())
        .then(svg => console.log(svg));

        return avatarId;
    };

    const searchUsers = (searchTerm, list) => {

        if (!searchTerm || searchTerm.trim() === '') {
            return list;
        }

        const normalized = searchTerm.toLowerCase();

        const searchResults = searchTerm.length > 0 &&
            list.filter(
                (elem) =>
                elem.name.first.toLowerCase().includes(normalized) ||
                elem.name.last.toLowerCase().includes(normalized) ||
                elem.email.toLowerCase().includes(normalized)
            );    

        return searchResults;
    };

    const getUserLocation = () => {

    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({
                position: null,
                error: "Geolocation is not supported by your browser",
            });
            return;
        }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          position: [pos.coords.latitude, pos.coords.longitude],
          error: null,
        });
      },
      (err) => {
        resolve({
          position: null,
          error: "Location permission denied",
        });
      },
      { enableHighAccuracy: true }
    );
  });
};


export { searchUsers, fetchVideos, fetchAvatar, fetchUsers, getUserLocation };