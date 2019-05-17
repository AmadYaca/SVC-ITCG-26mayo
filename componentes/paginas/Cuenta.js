import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, } from 'react-native';
import { Constants } from 'expo'
import firebase from 'firebase'

var database = firebase.database()

export default class Cuenta extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages:[],
    }
  }
  componentDidMount() {
    //metodo que recarga la lista cuando agregamos un nuevo registro
    database
      .ref('usuarios/3')
      .on("child_added", snapshot => {
        const data = snapshot.val()
        //jsonData = JSON.stringify(data)

        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.messages}
          renderItem={
            //Anonymous react component  
            ({ item }) =>
              <View style={styles.listItemContainer}>
                <Text style={styles.listItem}>
                  {item}
                </Text>
              </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  }
});