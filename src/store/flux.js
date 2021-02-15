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
              "Bearer BQD7aUeaoisVtNQv9QqInoJ0_02ZqqzsncoSJemtD9SCfkGj61d0sDfk-AuAcIfspChyK5_Qp-8a300FCH1XG4C8A3ifD854XOYi-iuuxtHV-YbEekYgi0W79Oju5AYNhnrtCsqYxhmL-XFCFFudJ7nNRPL0Z05r6fUpkhg",
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
