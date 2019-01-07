import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Contador from './components/Contador'

const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default class Route extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Contador />
            </Provider>
        );
    }
}