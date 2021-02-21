import { token } from "../Views/Feed";
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            tracks: null,
            artista: null,
            token: null,
            profile: null,
            error: null,
            recentTracks: null,
            topArtists: null,
            postList: [],
            userdb: [],
            REACT_APP_CLIENT_ID: "67aafa4a55a5406cbb5a1df8096f0448",
            REACT_APP_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
            REACT_APP_REDIRECT_URL: "http://localhost:3000/tokenlogin2171",
            REACT_APP_REDIRECT_URL2: "http://localhost:3000/feed",
        },
        actions: {
            isAuthenticated: () => {
                if (sessionStorage.getItem("access_token")) {
                    setStore({
                        token: sessionStorage.getItem("access_token"),
                    });
                }
            },

            handleLogin: () => {
                let store = getStore();
                window.location = `${store.REACT_APP_AUTHORIZE_URL}?client_id=${store.REACT_APP_CLIENT_ID}&redirect_uri=${store.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=user-read-private%20user-read-email%20playlist-read-private%20user-follow-read%20user-read-recently-played%20user-read-playback-state%20user-read-currently-playing%20user-top-read&state=34fFs29kd09`;
            },

            getToken: (history) => {
                let hash = window.location.hash;
                let hashResultante = hash.split("&");
                let token = hashResultante[0].replace("#access_token=", "");

                setStore({
                    token: token,
                });

                sessionStorage.setItem("access_token", token);
                console.log(token);


                history.push("/feed");
            },

            getUserData: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/me", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if (!data.error) {
                            setStore({
                                profile: data,
                            });
                        }
                        else {
                            setStore({
                                error: data.error
                            });
                        }
                    })
                    .catch((error) => console.error(error));
                console.log(store.profile)
                getActions().getUserRecentTracks();
                getActions().getUserTopArtists();
            },

            checkUser: () => {
                const { profile, userdb } = getStore();
                if (profile !== null && userdb !== null) {
                    const user = userdb.find(user => profile.id === user.user_id);
                    if (user) {
                        getActions().getUserDataPut(profile.id);
                    } else {
                        getActions().getUserDataPost();
                    }
                }
            },

            getUserdb: () => {
                fetch("http://localhost:5000/api/users", {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log("db");
                        console.log(data);
                        setStore({
                            userdb: data
                        });

                        getActions().checkUser();
                    })
                    .catch((error) => console.error(error));
            },

            getUserDataPost: () => {
                let store = getStore();
                fetch("http://localhost:5000/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "user_id": store.profile.id,
                        "name": store.profile.display_name,
                        "email": store.profile.email,
                        "followers": store.profile.followers.total,
                        "photo": store.profile.images[0].url,
                        "recentTracks": store.recentTracks
                    })
                })
                .then((resp) => resp.json())
                .then((data) => console.log(data))
            },
            
            getUserDataPut: (id) => {
                let store = getStore();
                fetch(`http://localhost:5000/api/user/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "name": store.profile.display_name,
                        "email": store.profile.email,
                        "followers": store.profile.followers.total,
                        "photo": store.profile.images[0].url,
                        "recentTracks": store.recentTracks.items
                    })
                })
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
            },

            getOtherProfile: (id) => {
                let store = getStore();
                fetch(`https://api.spotify.com/v1/users/${id}`, {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
                    .error((error) => console.error(error));
            },
            getUserRecentTracks: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/me/player/recently-played", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                .then((resp) => resp.json())
                .then((data) => setStore({
                    recentTracks: data
                }))
                .catch((error) => console.error(error))
                console.log(store.recentTracks)
            },
            getUserTopArtists: () => {
                let store = getStore();
                fetch("https://api.spotify.com/v1/me/top/artists", {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${store.token}`,
                        "Content-Type": "application/json",
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => setStore({
                        topArtists: data
                    }))
                    .catch((error) => console.error(error))
            },
            search: (input) => {
                let store = getStore();
                fetch(`https://api.spotify.com/v1/search?query=${input}&type=artist&market=US&limit=1`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${store.token}`,
                    },
                    mode: 'cors',
                    cache: 'default'
                })

                    .then(response =>
                        Promise.resolve({
                            data: response.json(),
                            status: response.status
                        })
                            .then(post => post.data)
                            .then(json => json.artists)
                            .then(items => {
                                console.log(items);
                                const artist = items.items[0];
                                setStore({
                                    artista: artist
                                });
                                fetch(`https://api.spotify.com/v1/artists/${store.artista.id}/albums?market=US&limit=10`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${store.token}`,
                                    },
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        console.log('artista', data);
                                        const tracks = data.items;
                                        setStore({
                                            tracks: tracks
                                        })
                                    })

                            })
                    );
            },
            logOut: (history) => {
                sessionStorage.removeItem('access_token');
                setStore({
                    profile: null,
                    token: null,
                    error: null
                })
                history.push('/login');
            },
            createPost: (inputValue) => {
                let store = getStore();

                fetch("http://localhost:5000/api/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "commentary": inputValue,
                        "user_id": store.profile.id
                    })
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                    console.log(data)
                    getActions().getPosts();
                })
                
                    .catch((error) => console.error(error))
            },
            getPosts: () => {
                fetch("http://localhost:5000/api/posts", {
                    headers: {
                        "Content-Type": "application/json"
                    },

                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        setStore({
                            postList: data
                        })
                        console.log(data)
                    })
                    .catch((error) => console.error(error))
            },
        },
    };
};

export default getState;
