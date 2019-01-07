import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Contador from './components/Contador'

function reducer() {
    return {
        count: 42
    };
}

const store = createStore(reducer);

// const  Route = () => (
//     <Provider store={store}>
//         <Contador />
//     </Provider>
// );

//export default Route;
export default class Route extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Contador />
            </Provider>
        );
    }
}