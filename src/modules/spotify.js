
const APIController = (function() {
    
    const clientId = 'cff280b633eb4f439ae1a66233be8bf0';
    const clientSecret = 'bce8dd6a0cc84cccaa31c1045bac6f85';

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    
    const _getGenres = async (token) => {

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }

    const _getPlaylistByGenre = async (token, genreId) => {

        const limit = 10;
        
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.playlists.items;
    }

    const _getTracks = async (token, tracksEndPoint) => {

        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }

    const _getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }

    return {
        getToken() {
            return _getToken();
        },
        getGenres(token) {
            return _getGenres(token);
        },
        getPlaylistByGenre(token, genreId) {
            return _getPlaylistByGenre(token, genreId);
        },
        getTracks(token, tracksEndPoint) {
            return _getTracks(token, tracksEndPoint);
        },
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        }
    }
})();



const loadGenres = async (APICtrl) => {
    //get the token
    const token = await APICtrl.getToken();           
    //store the token onto the page

    // UICtrl.storeToken(token);
    // console.log(token)

     const genreId = 'at_home';             
     // ge the playlist based on a genre
     const playlist = await APICtrl.getPlaylistByGenre(token, genreId);       

     // get track endpoint based on the selected playlist
     // const tracksEndPoint = playlistSelect.options[playlistSelect.selectedIndex].value;

     const tracksEndPoint = 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTyiBJ6yEqeu/tracks';
     // get the list of tracks
     const tracks = await APICtrl.getTracks(token, tracksEndPoint);

    //  tracks.forEach(el => console.log(el.track.name))
     return tracks
}

// will need to call a method to load the genres on page load




 const test = loadGenres(APIController).then(data =>{
    data.forEach(el => console.log(el.track.name))
    return data
 });
//  APIController();


//  export {APIController}
