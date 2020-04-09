import React, { Component } from 'react'
import {
    View, WebView, StyleSheet, AppRegistry
} from 'react-native'

export default class practical9 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: 'https://www.github.com/yashfrost1410' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})  
