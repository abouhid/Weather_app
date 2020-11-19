const clientId = 'cff280b633eb4f439ae1a66233be8bf0';
const clientSecret = 'bce8dd6a0cc84cccaa31c1045bac6f85';


const loadGenres = async () => {
    //get the token

    const getToken = async () => {

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

    const getTracks = async (token, tracksEndPoint) => {
        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }
    const token = await getToken();

     const tracksEndPoint = 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTyiBJ6yEqeu/tracks';
     // get the list of tracks
     const tracks = await getTracks(token, tracksEndPoint);

    //   tracks.forEach(el => console.log(el.track.album.images[2].url))
     return tracks
}

const resetList = () => {
    const songCont = document.querySelector('.songCont')
    while(songCont.firstChild){ songCont.removeChild(songCont.firstChild)}

}


const createSongElements = (el) => {
    const song = document.createElement('ul')
    const songCont = document.querySelector('.songCont')
    const newTrack = document.createElement('li')
    const newArtist = document.createElement('li')
    const newAlbum = document.createElement('img')
    song.className = 'song'
    newTrack.textContent =el.track.name 
    newArtist.textContent = el.track.artists[0].name
    newAlbum.src = el.track.album.images[0].url
    song.appendChild(newAlbum)
    song.appendChild(newTrack)
    song.appendChild(newArtist)

    songCont.appendChild(song)
}

export {loadGenres,createSongElements,resetList}