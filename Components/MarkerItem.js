import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'


class MarkerItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nameItem}>
                    <Text style={styles.nameItemText}>{this.props.name}</Text>
                </View>
                <View style={styles.containerCoords}>
                    <Text style={{alignSelf: 'flex-end'}}>Latitide:</Text>
                    <Text style={{alignSelf: 'flex-end'}}>Longitude:</Text>
                </View>
                <View style={styles.containerCoorinates}>
                    <Text style={{alignSelf: 'flex-start'}}>{this.props.latitude}</Text>
                    <Text style={{alignSelf: 'flex-start'}}>{this.props.longitude}</Text> 
                </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        paddingHorizontal: 5
    },
    nameItemText: {
        fontSize: 25, 
        textAlignVertical: 'center'
    },
    nameItem: {
        flex: 3, 
        paddingLeft: 10
    },
    containerCoords: {
        flex: 2, 
        flexDirection: 'column', 
        paddingHorizontal: 5
    },
    containerCoorinates: {
        flex: 3, 
        flexDirection: 'column', 
        paddingHorizontal: 5
    }
})

export default MarkerItem