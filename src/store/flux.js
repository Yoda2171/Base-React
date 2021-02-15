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
              "Bearer BQDOYlpvy4jLtpaqDOqmdsvXQsy5mhSjskNo1dYoLPz0KUxMFSfv9XftiKyfQuIR3N3a8uuTYL1UhM5o1vIdw4AyfmBjqtzaLznI6FevvoMbRHDurB7Fd3hbXDzJ0lfNOOJyr-pISEeVb_i-3hj6e9GvyMJLhcc",
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
