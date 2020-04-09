import * as React from 'react';
import { Picker, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
//import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
export default class Practical7 extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            backgroundColor: 'white',
        }
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
                <Picker
                    selectedValue={this.state.backgroundColor}
                    style={{ height: 50, width: '50%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ backgroundColor: itemValue })
                    }>

                    <Picker.Item label="white" value="white" />
                    <Picker.Item label="Orange" value="orange" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Red" value="red" />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
