import { token } from '../Views/Feed';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: "",
            profile: null,
            REACT_APP_CLIENT_ID: "67aafa4a55a5406cbb5a1df8096f0448",
            REACT_APP_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
            REACT_APP_REDIRECT_URL: "http://localhost:3000/feed",

        },
        actions: {
            getUserData: () => {
                let abc = getStore();
                fetch("https://api.spotify.com/v1/me", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                        `Bearer ${abc.token}`,
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

            handleLogin: () => {
                let store = getStore();
                window.location = `${store.REACT_APP_AUTHORIZE_URL}?client_id=${store.REACT_APP_CLIENT_ID}&redirect_uri=${store.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
            },

            getToken: () => {
                let store=getStore();
                let hash = window.location.hash;
                let hashResultante = hash.split("&");
                let token1 = hashResultante[0].replace("#access_token=", "");
                    store.token= token1;
            },
            
            getOtherProfile: () => {
                let store = getStore()
                fetch("https://api.spotify.com/v1/users/0h8o69aeq3z2rnl0ikqwtbbf0", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            `Bearer${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
                    .error((error) => console.error(error));
            },
            getUserArtists: () => {
                let store = getStore()
                fetch("https://api.spotify.com/v1/me/tracks", {
                    headers: {
                        Accept: "application/json",
                        Authorization:
                            `Bearer${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.error(error))
            },
        },
    };
};

export default getState;
