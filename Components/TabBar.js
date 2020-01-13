import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'

import store from '../store'

class TabBar extends React.Component {
    render() {
        return (
            <View style={{width: '100%', bottom: 0, left: 0, flexDirection: 'row'}}>
                <View style={{flex: 1, height: 40, backgroundColor: 'grey'}}>

                </View>
                <View style={{flex: 1, height: 40, backgroundColor: 'green'}}>

                </View>
            </View>
        )
    }
}

export default connect((state) => {return {globalState: state}})(TabBar)