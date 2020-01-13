emailReducer = (store = {}, action) => {
    switch(action.type) {
        case 'SET-EMAIL': {
            return Object.assign({}, store, {
                email: action.email
            })
        }
        default: {
            return store
        }
    }
    return store
}

export default emailReducer