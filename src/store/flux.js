const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            
        },
        actions: {
            a: () => {
                const store = getStore();
                console.log(store.name);
                const { b } = getActions();
                b();
            },
            b: () => {
                fetch("http://jsonplaceholder.typicode.com/users")
                .then(resp => resp.json())
                .then(data => {
                    setStore({
                        users: data
                    })
                })
             },
            c: () => { 

                console.log("ejecutando desde el cliente");
                setStore({
                    name: 'Martina',
                    lastname: 'Ojeda'
                })
                //getActions().a();
            },
        }
    }
}

export default getState;