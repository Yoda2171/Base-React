import { token } from "../Views/Feed";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tracks:null,
      artist:null,
      token: null,
      profile: null,
      error: null,
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
        window.location = `${store.REACT_APP_AUTHORIZE_URL}?client_id=${store.REACT_APP_CLIENT_ID}&redirect_uri=${store.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=user-read-private%20user-read-email%20playlist-read-private%20user-follow-read%20user-read-recently-played%20user-read-playback-state%20user-read-currently-playing&state=34fFs29kd09`;
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
        console.log(store.token);
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
      },

      getOtherProfile: () => {
        let store = getStore();
        fetch("https://api.spotify.com/v1/users/0h8o69aeq3z2rnl0ikqwtbbf0", {
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
      getUserArtists: () => {
        let store = getStore();
        fetch("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${store.token}`,
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      },
      search: (input) => {
        let store = getStore();
        fetch(`https://api.spotify.com/v1/search?q=${input}&type=track%2Cartist&market=US&limit=10&offset=5`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${store.token}`,
            "Content-Type": "application/json"
          }

        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              artist:data
            })
            console.log(store.artist)
            fetch(`https://api.spotify.com/v1/artists/${store.artist.id}/top-tracks?country=US&`,{
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${store.token}`,
                "Content-Type": "application/json"
              }
            })
            .then((response)=> response.json())
            .then((data) =>{
              setStore({
                tracks:data
              })
              console.log(store.tracks)
            })
          })
          
      },

      logOut: (history) => {
        sessionStorage.removeItem('access_token');
        setStore({
          profile: null,
          token: null,
          error: null
        })
        history.push('/login');
      }
    },
  };
};

export default getState;
