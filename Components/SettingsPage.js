import React from 'react'
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import {connect} from 'react-redux'
import store from '../store'
import { CheckValidEmail, CheckValidRadius, SaveSettings } from '../ChainOfResponsibility';

class Settings extends React.Component {
    constructor() {
        super()
        this.state={
            emailAddress: '',
            emailValid: true,
            radius: 0,
            radiusValid: true,
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            emailAddress: this.props.state.email.EmailAddress,
            emailValid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.props.state.email.EmailAddress),
            radius: `${this.props.state.radius}`,
            radiusValid: /^\d+(\.\d+)?$/.test(this.props.state.radius)
        })
    }

    closePage() {
        store.dispatch({type: 'SET-PAGE', page: 'map'})
    }

    editEmailAddress(value) {
        this.setState({
            emailAddress: value,
            emailValid: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        })
    }

    editRadius(value) {
        this.setState({
            radius: value,
            radiusValid: /^\d+(\.\d+)?$/.test(value)
        })
    }

    saveSettings() {
        var save = new CheckValidEmail()
        save.setNext(new CheckValidRadius())
        save.setNext(new SaveSettings())
        save.handle(this.state)
    }

    deleteAllMarkers() {
        store.dispatch({type: 'DELETE-ALL-MARKERS'})
    }

    openPageMarkers() {
        store.dispatch({type: 'SET-PAGE', page: 'markers'})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.saveSettings()} style={{flex: 1, alignItems: 'flex-start'}}>
                        <Ionicons name='md-checkmark-circle' size={45}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, textAlign: 'center', flex: 1}}>Settings</Text>
                    <TouchableOpacity onPress={this.closePage} style={{flex: 1, alignItems: 'flex-end'}}>
                        <Ionicons name='md-close-circle' size={45}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        Email:
                    </Text>
                    <TextInput 
                        value={this.state.emailAddress} 
                        onChangeText={(e) => this.editEmailAddress(e)} 
                        autoCompleteType={'email'} 
                        style={this.state.emailValid ? styles.inputValid : styles.inputInValid}
                    />
                    <Text style={styles.title}>
                        Radius:
                    </Text>
                    <TextInput 
                        value={this.state.radius}
                        onChangeText={(e) => this.editRadius(e)}
                        keyboardType={'number-pad'} 
                        style={this.state.radiusValid ? styles.inputValid : styles.inputInValid}
                    />
                    <TouchableOpacity onPress={this.deleteAllMarkers} style={styles.button}>
                        <Text style={{fontSize: 18}}>Delete all markers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.openPageMarkers} style={styles.button}>
                        <Text style={{fontSize: 18}}>Show all markers</Text>
                    </TouchableOpacity>
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
    button: {
        marginTop: 20, 
        width: '100%', 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: 'black', 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})

export default connect(state => {return {state: state.settingsState}})(Settings)