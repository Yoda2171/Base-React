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
              "Bearer BQB7nfoAlfjTBo7BVXCmllsESqQfG6Y8HAHTSUfUL72qDzC3ylhMEIhMbwVB1wxdvvusAcCWKsk4l7hP3qK7xD7NidtyC6bRVjX0zFvxM1SFoCbgWdjp8tMhQrU5KI1jfCSULGGPVg",
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
