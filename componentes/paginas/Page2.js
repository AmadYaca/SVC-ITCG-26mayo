import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

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
          title="Cerrar sesion"
          onPress={() => this.props.navigation.navigate('Login')}
        ></Button>

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
  container: {
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