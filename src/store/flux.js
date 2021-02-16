const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      profile: null,


      REACT_APP_CLIENT_ID: "67aafa4a55a5406cbb5a1df8096f0448",
      REACT_APP_AUTHORIZE_URL: "https://accounts.spotify.com/authorize",
      REACT_APP_REDIRECT_URL: "http://localhost:3000/feed",

    },
    actions: {
      getUserData: () => {

        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQBMGjmz8xzYGyuBW9opCjCh31wXKJaDkVJFVcFI8IdlRfGuR73OefEEz59A8PsKL4N9GW42KG1QPY6hcT5Zsk13FyAN-bFaxIDBpM2cDSEhLIDAWA3hOR7y2xy00AFs1CbzbwOQYA",
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
        let store = getStore();

        fetch("https://accounts.spotify.com/api/token", {
          body: "grant_type=refresh_token&refresh_token=BQBMGjmz8xzYGyuBW9opCjCh31wXKJaDkVJFVcFI8IdlRfGuR73OefEEz59A8PsKL4N9GW42KG1QPY6hcT5Zsk13FyAN-bFaxIDBpM2cDSEhLIDAWA3hOR7y2xy00AFs1CbzbwOQYA&client_id=78ddd16c16e43884672d93a4a299bd0a59878fc3",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST"
        })
      }


    },
  };
};

export default getState;
