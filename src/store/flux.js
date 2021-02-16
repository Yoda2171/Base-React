import { hash } from '../Views/Feed';
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      profile: null,
      artists: null
    },
    actions: {
      getUserData: () => {
        fetch("https://api.spotify.com/v1/me", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer BQAXw0q7n8x7JjIhKSvYmFYEXFseEUB5ieQVKSpKuH5SHAM9cq1UGkQ3RGJFIGX49FbaY4eqWAYgQ-ZIdm_n3TBhSXAYvkHBVZbRNO0wslWXQ0C_BDVjw0DYkTFvOHTyBFJyV827a97v9xqMdrdTQHrCoGIseUuap6YXJMw",
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              profile: data,
            });
          })
          .catch((error) => console.error(error));
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
