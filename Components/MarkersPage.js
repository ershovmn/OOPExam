import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import store from '../store';
import MarkerItem from './MarkerItem';

class MarkersPage extends React.Component {
    closePage() {
        store.dispatch({type: 'SET-PAGE', page: 'settings'})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity onPress={this.closePage} style={{alignItems: 'flex-start'}}>
                        <Ionicons name='md-close-circle' size={45}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, textAlign: 'center', flex: 1}}>Markers</Text>
                    <TouchableOpacity onPress={this.closePage} style={{alignItems: 'flex-end'}}>
                        <Ionicons name='md-close-circle' size={45}/>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.containerItems}>
                    {this.props.globalState.mapState.markers.map((marker, index) => {
                        return (
                            <MarkerItem key={index} name={marker.Name} latitude={marker.Latitude} longitude={marker.Longitude}/>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    containerItems: {
        flex: 1,
        width: '100%'
    }
})

export default connect((state) => {return {globalState: state}})(MarkersPage)