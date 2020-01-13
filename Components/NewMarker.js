import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import { Ionicons } from '@expo/vector-icons'

import MarkerModel from '../Models/MarkerModel'
import store from '../store';

class NewMarker extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    
    editValue(value) {
        this.setState({
            value: value
        })
    }

    saveMarker() {
        if(this.state.value ===  '') {
            Alert.alert(
                'Некорректные данные',
                'Пожалуйста введите название маркера'
            )
            return
        }

        var marker = new MarkerModel(this.props.latitude, this.props.longitude, this.state.value)
        marker.AddToMap()
        this.closePage()
    }

    closePage() {
        store.dispatch({type: 'SET-PAGE', page: 'map'})
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.saveMarker()} style={{alignItems: 'flex-start'}}>
                        <Ionicons name='md-checkmark-circle' size={45}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, textAlign: 'center', flex: 1}}>New marker</Text>
                    <TouchableOpacity onPress={this.closePage} style={{alignItems: 'flex-end'}}>
                        <Ionicons name='md-close-circle' size={45}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        Name:
                    </Text>
                    <TextInput 
                        value={this.state.value} 
                        onChangeText={(e) => this.editValue(e)} 
                        style={this.state.value ? styles.inputValid : styles.inputInValid}
                    />
                    <Text style={styles.title}>
                        Latitude:
                    </Text>
                    <Text style={styles.coordinate}>
                        {this.props.latitude}
                    </Text>
                    <Text style={styles.title}>
                        Longitude:
                    </Text>
                    <Text style={styles.coordinate}>
                        {this.props.longitude}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '100%',
    },
    header: {
        paddingHorizontal: 20, 
        marginBottom: 20, 
        flexDirection: 'row', 
        marginTop: 30,
    },
    contentContainer: {
        width: '100%', 
        flex: 1, 
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 23, 
        marginLeft: 5, 
        marginLeft: 10,
    },
    inputValid: {
        width: '100%', 
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 10, 
        backgroundColor: 'white',
        paddingHorizontal: 5,
        fontSize: 18,
    },
    inputInValid: {
        width: '100%', 
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 10, 
        backgroundColor: 'red',
        paddingHorizontal: 5,
        fontSize: 18,
    },
    coordinate: {
        width: '100%', 
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 10, 
        backgroundColor: 'white',
        paddingHorizontal: 5,
        fontSize: 18,
        textAlignVertical: 'center'
    }
})

export default connect(state => {return {latitude: state.mapState.newMarker.latitude, longitude: state.mapState.newMarker.longitude}})(NewMarker)