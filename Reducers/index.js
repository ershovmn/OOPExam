import {combineReducers} from 'redux'

import settingsReducer from './settingsReducer'
import mapReducer from './mapReducer'
import navigatorReducer from './navigatorReaducer'

const reducers = combineReducers({
    mapState: mapReducer,
    navigatorState: navigatorReducer,
    settingsState: settingsReducer,
})

export default reducers