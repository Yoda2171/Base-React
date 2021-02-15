const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      profile: null,
    },
    actions: {
      getUserData: () => {
        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQCASgwg6pAkq6eXaShaaYMd3lnwPYH2KMr5i6M7xNSFXg2exsMESrUbxObtorL5e-h-zXXO7OzWmLRbl_pWy_cKg_cVK5-dhsE2UQfyW3dOwbQc6nBqFDoxgMiW7LEzBWisDoxAXA",
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
    },
  };
};

export default getState;
