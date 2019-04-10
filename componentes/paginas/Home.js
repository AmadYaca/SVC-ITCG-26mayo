import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
//import Icon from 'react-native-vector-icons/AntDesign'
//import IconFeather from 'react-native-vector-icons/Feather'


//const myIcon = (<Icon name="caretup" size={40} color="#900"/>)

//las clases que se mostraran en cada tab
import Page2 from './Page2'
import Registro from './Registro'

class App extends Component {

}

const TabNavigator = createBottomTabNavigator({
  Destino: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Destino',
     
    }
  },
  Canales: {
    screen: Registro,
    navigationOptions: {
      tabBarLabel: 'Ofertas',
    
    }
  },
  Cuenta: {
    screen: Registro,
    navigationOptions: {
      tabBarLabel: 'Cuenta',
    
    }
  },
}, {
    //router config
    //initialRouteName: 'Canales', //que pestaña se visualiza primero
    //order: ['Channels', 'Account', 'Destiny'], //orden en el que se visualiza en el tab

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
