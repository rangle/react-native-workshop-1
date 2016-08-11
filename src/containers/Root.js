import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import createStore from '../store/configureStore';
import Pokedex from './Pokedex';

const store = createStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pokedex/>
      </Provider>
    );
  }
}

export default Root;
