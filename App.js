/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Contents from './Component/Contents';

export default class App extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar />
        <View style={styles.container}>
          <Text style={styles.title}>KALKULATOR REACT NATIVE</Text>
        </View>
        <Contents />
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#86d063',
      marginTop: 35,
      padding: 20
    },
    title: {
      textAlign: 'center',
      fontSize: 20
    }
  })
