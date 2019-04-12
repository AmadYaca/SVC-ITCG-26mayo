import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
//import Icon from 'react-native-vector-icons/AntDesign'
//import IconFeather from 'react-native-vector-icons/Feather'


//const myIcon = (<Icon name="caretup" size={40} color="#900"/>)

//las clases que se mostraran en cada tab
import Ofertas from './Ofertas'
import Cuenta from './Cuenta'
import Destino from '../mapa/Destino'

class App extends Component {

}

const TabNavigator = createBottomTabNavigator({
  tabDestino: {
    screen: Destino,
    navigationOptions: {
      tabBarLabel: 'Destino',

    }
  },
  tabOfertas: {
    screen: Ofertas,
    navigationOptions: {
      tabBarLabel: 'Ofertas',

    }
  },
  tabCuenta: {
    screen: Cuenta,
    navigationOptions: {
      tabBarLabel: 'Cuenta',
    }
  },
}, {
    //router config

    //initialRouteName: 'tabDestino', //que pestaña se visualiza primero
    //order: ['tabDestino', 'tabOfertas', 'tabCuenta'], //orden en el que se visualiza en el tab

    //navigation for complete tab navigation
    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'red'
    }
  });

export default createAppContainer(TabNavigator)
