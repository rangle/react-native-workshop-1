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
import { connect } from 'react-redux';
import * as actions from '../actions';

const store = createStore();

class Root extends Component {
  componentDidMount() {
      store.dispatch(actions.viewAllPokemon());
  }

  render() {
    return (
      <Provider store={store}>
        <Pokedex/>
      </Provider>
    );
  }
}

export default Root;
