

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            profile: {}
        },
        actions: {
            getUserTracks: () => {
                fetch('https://api.spotify.com/me')/* {
                    'Content-Type': 'text/string'
                }}) */
                .then(resp => resp.json())
                .then(
                    function(data) {
                        console.log(data);
                    })
                .catch(err => console.error(err));
            }
        }
    }
}


export default getState;