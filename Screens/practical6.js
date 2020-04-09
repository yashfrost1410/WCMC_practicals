import React, { Component } from 'react';
import { StyleSheet, Input, TextInput, Text, View, Button, Alert, Props } from 'react-native';

import Torch from 'react-native-torch';


export default class practical6 extends Component {
    torchlighton = () => {
        Torch.switchState(true); // Turn ON
    }

    torchlightoff = () => {
        Torch.switchState(false); // Turn ON
    }

    render() {
        return (
            <Button
                title="Press me"
                onPress={() => torchlighton()}
            />

        );
    }



}

const styles = StyleSheet.create(
    {
        baseText: {
            fontFamily: 'Cochin',
        },
        Button: {
            color: 'red',
            height: 30,
            width: "40%",
        },
        titleText: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: "center",
        },
    });
