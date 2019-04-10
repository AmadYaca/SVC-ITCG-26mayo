import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import { Constants } from 'expo'
/*
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAGH35E_jyVSo7qYGZohB0a_BjdJhB9Fxk",
  authDomain: "loginexpo-a9a8f.firebaseapp.com",
  databaseURL: "https://loginexpo-a9a8f.firebaseio.com",
  projectId: "loginexpo-a9a8f",
  storageBucket: "loginexpo-a9a8f.appspot.com",
  messagingSenderId: "634585654047"
};
firebase.initializeApp(config); //marca error porque ya esta inicializado firebase en Ofertas.js
*/

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