import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Constants } from 'expo'
import firebase from 'firebase'

var database = firebase.database()

export default class Cuenta extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text>
              Cuenta
          </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      marginTop: Constants.statusBarHeight,
  }
});