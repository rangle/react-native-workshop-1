import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Immutable, { List } from 'immutable';
import { connect } from 'react-redux';
import * as actions from '../actions';
import clrs from '../utils/clrs';
import { getPokemonImageUrl } from '../utils/pokemon';

class Pokedex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokedex);

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon.get('all'),
    query: state.pokemon.get('query'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filter: query => dispatch(actions.filter(query)),
  };
}
