import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAGH35E_jyVSo7qYGZohB0a_BjdJhB9Fxk",
  authDomain: "loginexpo-a9a8f.firebaseapp.com",
  databaseURL: "https://loginexpo-a9a8f.firebaseio.com",
  projectId: "loginexpo-a9a8f",
  storageBucket: "loginexpo-a9a8f.appspot.com",
  messagingSenderId: "634585654047"
};
firebase.initializeApp(config);


export default class Ofertas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: [],
    }

    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    //va a leer toda la info de baseDatos/mensajes SOLO cuando se carga la app
    firebase
      .database()
      .ref()
      .child("ofertas")
      .child("dos")
      //pero solo la leera una vez, cuando se carge la app
      //y dentro de los parentesis le decimos que queremos recuperar
      .once("value", snapshot => {
        //guardamos los valores en la constante data
        const data = snapshot.val()

        //si efectivamente recuperamos algo de la consulta
        if (data) {
          const initMessages = [];
          //pasamos los datos de nuestra snapshot a un arreglo llamado initMessages
          Object
            .keys(data)
            .forEach(message => initMessages.push(data[message]))

          this.setState({
            messages: initMessages
          })
        }
      })

    //para cuando agregamos un nuevo registro
    firebase
      .database()
      .ref()
      .child("ofertas")
      .child("dos")
      .on("child_added", snapshot => {
        const data = snapshot.val()

        if(data){
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })

  }

  addItem() {

  }

  render() {
    return (
      <View style={styles.container}>

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