const defaultStateMap = {
    markers: [],
    region: null,
    newMarker: null,
}

mapReducer = (state = defaultStateMap, action) => {
    switch(action.type) {
        case 'NEW-MARKER': {
            var newMarkers = state.markers.concat([action.newMarker])
            return Object.assign({}, state, {markers: newMarkers})
        }
        case 'DELETE-ALL-MARKERS': {
            return Object.assign({}, state, {
                markers: []
            })
        }
        case 'SET-REGION': {
            return Object.assign({}, state, {
                region: action.region,
            })
        }
        case 'ADD-MARKER': {
            return Object.assign({}, state, {
                newMarker: action.marker
            })
        }
        default: {
            return state
        }
    }
}

export default mapReducer