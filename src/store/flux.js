import { hash } from '../Views/Feed';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: "Bearer BQDeZR5I5jvaztOeqUeCKiwa8BoGS4kEm1JQyW5zRsXQtlAfKC2F8htOjv7IVeP5t1xMMYC7s7k4HIk8ZPxIlpqARspe55GrUde2ZyumJI_sPMRMGBa09sqE9SuPbdokE9DqzRJePWCdnZH-Y6h0sg2dDALgAxg",
            profile: null,
            artists: null,
            playlists: null,
        },
        actions: {
            getUserData: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/me", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            store.token,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        setStore({
                            profile: data
                        })
                    })
                    .catch((error) => console.error(error));
            },
            getArtists: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/artists", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            store.token,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        setStore({
                            artists: data
                        })
                    })
                    .catch((error) => console.error(error));
            },
            getPlayLists: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/me/playlists", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            store.token,
                        "Content-Type": "application/json"
                    }
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data);
                        setStore({
                            playlists: data
                        })
                    })
                    .catch((error) => console.error(error));
            },
           /*  getToken: () => {
                fetch("https://accounts.spotify.com/api/token", {
                    body: "grant_type=refresh_token&refresh_token=BQBxtM1_m9_DuomnxP8VZt27SUP4fBJOsAfsP88laou0uynZMWc2hydhFrXermUc2XJz9scVQwfdJwpWwFH9idxPvb3GBF_pOSbClDno9aqm05ApzrrOZvHGpILv-FERkPbC5MpAOYsLUPf92hiVEV4Tw9kIAbs&client_id=67aafa4a55a5406cbb5a1df8096f0448",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST"
                })
            }, */
        },
    };
};

export default getState;
