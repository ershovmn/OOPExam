import React from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'

import MapPage from './Components/MapPage'
import SettingsPage from './Components/SettingsPage'
import MarkersPage from './Components/MarkersPage'
import NewMarkerPage from './Components/NewMarkerPage'

class Navigator extends React.Component {
    render() {
        console.log(this.props)
        return (
            <View style={{flex: 1, width: '100%'}}>
                {this.props.page === 'map' ? <MapPage /> : null}
                {this.props.page === 'settings' ? <SettingsPage /> : null}
                {this.props.page === 'markers' ? <MarkersPage /> : null}
                {this.props.page === 'newmarker' ? <NewMarkerPage /> : null}
            </View>
        )
    }
}

export default connect((state) => {return {page: state.navigatorState.page}})(Navigator)