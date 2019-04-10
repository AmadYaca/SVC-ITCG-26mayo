import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Page2 extends Component{
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Cerrar sesion"
          onPress={()=>this.props.navigation.navigate('Login')}
        ></Button>
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
});