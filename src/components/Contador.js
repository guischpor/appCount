import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtTitle}>Contador</Text>
                <View style={styles.viewCount}>
                    <TouchableHighlight
                            underlayColor={'#bf1e1a'}
                            activeOpacity={0.3}
                            onPress={ () => {this.decrement() }}
                            style={{
                                borderRadius: 8,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign:'center',
                                    backgroundColor: '#bf1e1a',
                                    borderRadius: 8,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    padding: 20,
                                }}
                            >
                                    -
                            </Text>
                    </TouchableHighlight>

                    <Text style={styles.txtCount}>{`${this.state.count}`}</Text>

                    <TouchableHighlight
                            underlayColor={'#012e8f'}
                            activeOpacity={0.3}
                            onPress={ () => {this.increment() }}
                            style={{
                                borderRadius: 8,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign:'center',
                                    backgroundColor: '#012e8f',
                                    borderRadius: 8,
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    padding: 20,
                                }}
                            >
                                    +
                            </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    txtTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },

    txtCount: {
        fontSize: 40,
        fontWeight: 'bold',
        marginRight: 40,
        marginLeft: 40,
    },

    viewCount: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});