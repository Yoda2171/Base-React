const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: "Bearer BQBlDrH5FTa7RC0CioPAEJGNz4TiIkUU3ZieRN2zNIf-qyEDJ30Cl1B3fcezpx-1-_Vq30mpAMryT4hgt1GfqKi-f750MnyTuS77gJYnd64yJWXhMgGzWEGW1W_-ni0JGvP0OmOqWFRl-dXOZGqlBb8oCvkSdSsUQd8F4qqJhDay7qhV-n5m1pkmQ2umMFCK2fieBqPIZhVhnv-4Lu9KiNOK6AFh09PfoC7b281GOwTA4RMUJ7SmLypMLLhRGr-iyq8l0DVKdGOc2rCSehrLQRptQw4XpYn_7GM",
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
        },
    };
};

export default getState;
