import React from 'react';
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import {connect} from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'

import store from '../store'
import { CheckEmail, CheckMarkers, SendEmail } from '../ChainOfResponsibility';


class MapPage extends React.Component {
    constructor() {
        super()
        this.state = {
            myGelolocation: null
        }
    }

    componentDidMount() {
        if(this.props.globalState.mapState.region === null) {
            navigator.geolocation.getCurrentPosition(pos => {
                store.dispatch({type: 'SET-REGION', region: {
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    latitudeDelta: 0.22150576723625193,
                    longitudeDelta: 0.20366314798593876,
                }})
            })
        }
    }

    newMark(data) {
        store.dispatch({type: 'ADD-MARKER', marker: {
            latitude: data.nativeEvent.coordinate.latitude,
            longitude: data.nativeEvent.coordinate.longitude,
        }})
        store.dispatch({type: 'SET-PAGE', page: 'newmarker'})
    }

    renderMarkers() {
        var markers = this.props.globalState.mapState.markers
        return markers.map((marker, index) => {
            return (
                <Marker title={marker.Name} coordinate={marker.Coords()} key={index}/>
            )
        })
    }

    openSettings() {
        store.dispatch({type: 'SET-PAGE', page: 'settings'})
    }

    trySendEmail() {
        var sendemail = new CheckEmail()
        sendemail.setNext(new CheckMarkers())
        sendemail.setNext(new SendEmail())
        sendemail.handle(this.props.globalState)
    }

    changeRegion(e) {
        store.dispatch({type: 'SET-REGION', region: e})
    }

    render() {
        return (
            <View style={styles.mapStyle}>
                <MapView 
                    region={this.props.globalState.mapState.region} 
                    onRegionChangeComplete={this.changeRegion} 
                    showsUserLocation={true} 
                    onPress={this.newMark} 
                    style={styles.mapStyle}
                    >
                    {this.renderMarkers()}
                </MapView>
                <TouchableOpacity onPress={this.openSettings} style={styles.settingsButton}>
                    <Ionicons name='md-settings' size={40} color='black'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.trySendEmail()} style={styles.mailButton}>
                    <Ionicons name='md-mail' size={40} color='black'/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        flex: 1,
        width: '100%',
    },
    settingsButton: {
        left: 20, 
        bottom: 20, 
        position: 'absolute',
    },
    mailButton: {
        right: 20, 
        bottom: 20, 
        position: 'absolute'
    }
})

export default connect((store) => {return {globalState: store}})(MapPage)