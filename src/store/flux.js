const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      token: null,
      profile: null,

      REACT_APP_CLIENT_SECRET: "783ea86cfae347439fd76f81e3b46cb0",
      REACT_APP_CLIENT_ID: "67aafa4a55a5406cbb5a1df8096f0448",
      REACT_APP_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
      REACT_APP_REDIRECT_URL: "http://localhost:3000/feed",

    },
    actions: {

      getToken: () => {
      
        const hash = window.location.hash;
        const hashResultante = hash.split("&");
        const token2 = hashResultante[0].replace("#access_token=", " "); 
        console.log(token2)
        setStore({
            token: token2,
        }) 
 
      },
      

      getUserData: () => {
        let store = getStore();
        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Accept: "application/json",
            Authorization:
              `Bearer BQDotKoKSIzKSd9ZD1iyj6scH-jwsct0TiDHbRriYKkldYYJ7u3kYjikwdrRh2IykdmsKgKAtaknQj3TwjTYBMDL8Hx_gyBtFXEB0lJQPPcglJJRt02Cwyq9HuMeLdiz8v6nUxT0Dg`,
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



      getOtherProfile: () => {
        fetch("https://api.spotify.com/v1/users/0h8o69aeq3z2rnl0ikqwtbbf0", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQAXw0q7n8x7JjIhKSvYmFYEXFseEUB5ieQVKSpKuH5SHAM9cq1UGkQ3RGJFIGX49FbaY4eqWAYgQ-ZIdm_n3TBhSXAYvkHBVZbRNO0wslWXQ0C_BDVjw0DYkTFvOHTyBFJyV827a97v9xqMdrdTQHrCoGIseUuap6YXJMw",
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .error((error) => console.error(error));
      },

      getUserArtists: () => {
        fetch("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQAXw0q7n8x7JjIhKSvYmFYEXFseEUB5ieQVKSpKuH5SHAM9cq1UGkQ3RGJFIGX49FbaY4eqWAYgQ-ZIdm_n3TBhSXAYvkHBVZbRNO0wslWXQ0C_BDVjw0DYkTFvOHTyBFJyV827a97v9xqMdrdTQHrCoGIseUuap6YXJMw",
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
