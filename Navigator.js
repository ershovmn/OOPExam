import React from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'

import MapPage from './Components/MapPage'
import SettingsPage from './Components/SettingsPage'
import ShowMarkers from './Components/ShowMarkers'
import NewMarker from './Components/NewMarker'

class Navigator extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1, width: '100%'}}>
                {this.props.page === 'map' ? <MapPage /> : null}
                {this.props.page === 'settings' ? <SettingsPage /> : null}
                {this.props.page === 'markers' ? <ShowMarkers /> : null}
                {this.props.page === 'newmarker' ? <NewMarker /> : null}
            </View>
        )
    }
}

export default connect((state) => {return {page: state.navigatorState.page}})(Navigator)