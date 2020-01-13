import EmailModel from "../Models/EmailModel"

const defaultState = {
    email: new EmailModel(),
    radius: 10
}

settingsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET-SETTINGS': {
            console.log(action)
            return Object.assign({}, state, {
                email: new EmailModel(action.emailAddress),
                radius: action.radius,
            })
        }
        case 'SET-EMAIL-ADDRESS': {
            return Object.assign({}, state, {
                email: new EmailModel(action.emailAddress)
            })
        }
        case 'SET-RADIUS': {
            return Object.assign({}, state, {
                radius: action.radius,
            })
        }
        default: {
            return state
        }
    }
}

export default settingsReducer