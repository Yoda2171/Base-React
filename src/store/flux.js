import SpotifyWebApi from 'spotify-web-api-js';
import Spotify from 'spotify-web-api-js';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            profile: {}
        },
        actions: {
            getUserTracks: () => {
                fetch('	https://api.spotify.com/v1/me')/* {
                    'Content-Type': 'text/string'
                }}) */
                .then(resp => resp.json())
                .then(
                    function(data) {
                        console.log(data);
                    })
                .catch(err => console.error(err));
            }
        }
    }
}

let spotify = new Spotify();
let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQBJIC5TfMfbF90pW3qYPuSJK1360SzFQNVJUHLd1eNZBGexBIuMYAJBj');              

export default getState;