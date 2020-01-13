const defaultState = {
    page: 'map'
}

navigatorReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET-PAGE': {
            return Object.assign({}, state, {
                page: action.page
            })
        }
        default: {
            return state
        }
    }
}

export default navigatorReducer