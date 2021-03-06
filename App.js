import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation'
import Login from './componentes/login/Login'
import Register from './componentes/paginas/Registro'
import Home from './componentes/paginas/Home'

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },

    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      }
    },

    Register: {
      screen: Register,
      navigationOptions: {
        headerLeft: null,
        title: "Registrarse en SVC-ITCG",//'Formulario de REGISTRO',
      }
    }
  },
  {
    initialRouteName: "Login",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: 'Inicio de Sesión',
    },
  },
)
const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {

  render() {
    return (
      <AppContainer></AppContainer>
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
