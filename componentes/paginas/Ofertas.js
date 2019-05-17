import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

import { Constants } from 'expo'
import firebase from 'firebase'

var database = firebase.database()

export default class Ofertas extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: "",
      messages: [],
    }
  }

  componentDidMount() {
    //va a leer toda la info de baseDatos/mensajes SOLO cuando se carga la app
    database
      .ref('ofertas/pasajeros')
      //pero solo la leera una vez, cuando se carge la app
      //y dentro de los parentesis le decimos que queremos recuperar
      .once("value", snapshot => {
        //guardamos los valores en la constante data
        const data = snapshot.val()
        //jsonData = JSON.stringify(data)

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
    database
      .ref('ofertas/pasajeros')
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
          keyExtractor={(item, index) => index.toString()}
        />

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
