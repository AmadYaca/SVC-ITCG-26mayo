import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAGH35E_jyVSo7qYGZohB0a_BjdJhB9Fxk",
  authDomain: "loginexpo-a9a8f.firebaseapp.com",
  databaseURL: "https://loginexpo-a9a8f.firebaseio.com",
  projectId: "loginexpo-a9a8f",
  storageBucket: "loginexpo-a9a8f.appspot.com",
  messagingSenderId: "634585654047"
};
firebase.initializeApp(config);


export default class Page2 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem() {

  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          style={styles.boton}
          title="Cerrar sesion"
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <FlatList
          data={this.state.messages}
          renderItem={
            ({ item }) =>
              <View styles={styles.list}>
                <Text style={styles.listItem}>
                  {item}
                </Text>
              </View>
          }
        >

        </FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    marginTop: Constants.statusBarHeight,
    padding: 5,
  },
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 5,
  },
  listItem: {
    fontSize: 15,
    padding: 5,
  },
});