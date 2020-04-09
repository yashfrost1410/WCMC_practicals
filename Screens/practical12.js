import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, ScrollView, Linking } from 'react-native';
import Voice from '@react-native-community/voice';

export default class Practical8 extends React.Component {
    state = {
        pitch: '',
        error: '',
        end: '',
        started: '',
        results: [],
        partialResults: [],
    }

    constructor(props) {
        super(props);
        Voice.onSpeechStart = this.onSpeechStart;
        Voice.onSpeechEnd = this.onSpeechEnd;
        Voice.onSpeechError = this.onSpeechError;
        Voice.onSpeechResults = this.onSpeechResults;
        Voice.onSpeechPartialResults = this.onSpeechPartialResults;
        Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged;
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }

    onSpeechStart = e => {
        // console.log('onSpeechStart: ', e);
        this.setState({
            started: '√',
        });
    };

    onSpeechEnd = e => {
        // console.log('onSpeechEnd: ', e);
        this.setState({
            end: '√',
        });
    };

    onSpeechError = e => {
        console.log('onSpeechError: ', e);
        this.setState({
            error: JSON.stringify(e.error),
        });
    };

    onSpeechResults = e => {
        // console.log('onSpeechResults: ', e);
        this.setState({
            results: e.value,
        });
        for (let i = 0; i < this.state.results.length; i++) {
            if (this.state.results[i].toLowerCase() == 'open whatsapp') {
                Linking.openURL('whatsapp://chat');
            }
            if (this.state.results[i].toLowerCase() == 'open snapchat') {
                Linking.openURL('snapchat://status');
            }
            if (this.state.results[i].toLowerCase() == 'open facebook') {
                Linking.openURL('facebook://profile');
            }
        }
    };

    onSpeechPartialResults = e => {
        this.setState({
            partialResults: e.value,
        });
    };

    onSpeechVolumeChanged = e => {
        this.setState({
            pitch: e.value,
        });
    };

    _startRecognizing = async () => {
        this.setState({
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: '',
        });

        try {
            await Voice.start('en-US');
        } catch (e) {
            console.error(e);
        }
    };

    _stopRecognizing = async () => {
        try {
            await Voice.stop();
        } catch (e) {
            console.error(e);
        }
    };

    _cancelRecognizing = async () => {
        try {
            await Voice.cancel();
        } catch (e) {
            console.error(e);
        }
    };

    _destroyRecognizer = async () => {
        try {
            await Voice.destroy();
        } catch (e) {
            console.error(e);
        }
        this.setState({
            pitch: '',
            error: '',
            started: '',
            results: [],
            partialResults: [],
            end: '',
        });
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Voice Interaction
          </Text>
                    <Text style={styles.instructions}>
                        Press mike to Start Recognition
          </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#B0171F',
                            }}
                        >{`Started: ${this.state.started}`}</Text>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#B0171F',
                            }}
                        >
                            {`End: ${this.state.end}`}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#B0171F',
                            }}>
                            {`Pitch \n ${this.state.pitch}`}
                        </Text>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',
                                color: '#B0171F',
                            }}
                        >
                            {`Error \n ${this.state.error}`}
                        </Text>
                    </View>
                    <TouchableHighlight
                        onPress={this._startRecognizing}
                        style={{ marginVertical: 20 }}>
                        <Image
                            style={styles.button}
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
                            }}
                        />
                    </TouchableHighlight>

                    <Text
                        style={styles.stat}
                    >Results</Text>
                    <ScrollView style={{ marginBottom: 42 }}>
                        {this.state.results.map((result, index) => {
                            return (
                                <Text key={`result-${index}`} style={styles.stat}>{result}</Text>
                            );
                        })}
                    </ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'space-between',
                            position: 'absolute',
                            bottom: 0,
                        }}
                    >
                        <TouchableHighlight
                            onPress={this._stopRecognizing}
                            style={{ flex: 1, backgroundColor: 'red' }}>
                            <Text style={styles.action}>Stop</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={this._cancelRecognizing}
                            style={{ flex: 1, backgroundColor: 'red' }}>
                            <Text style={styles.action}>Cancel</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={this._destroyRecognizer}
                            style={{ flex: 1, backgroundColor: 'red' }}
                        >
                            <Text style={styles.action}>Destroy</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    action: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        paddingVertical: 8,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    stat: {
        textAlign: 'center',
        color: '#B0171F',
        marginBottom: 1,
        marginTop: 30,
    },
});