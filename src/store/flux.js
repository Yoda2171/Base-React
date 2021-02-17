import { token } from "../Views/Feed";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      profile: null,
      error: null,
      REACT_APP_CLIENT_ID: "67aafa4a55a5406cbb5a1df8096f0448",
      REACT_APP_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
      REACT_APP_REDIRECT_URL: "http://localhost:3000/facetify",
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
      },

      handleLogin: () => {
        let store = getStore();
        window.location = `${store.REACT_APP_AUTHORIZE_URL}?client_id=${store.REACT_APP_CLIENT_ID}&redirect_uri=${store.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
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

        getActions().getUserData();
        history.push("/feed");
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
