import React, { Component } from 'react'
import {
    Alert,
    Image,
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import logo from '../../imagenes/itcg-black.png'
import styles from '../../styles/LoginStyles'
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

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            contra: '',

            inputs: '',
        };
    }

    iniciarSesion = () => {
        usuarioReg = 'Amilcar'
        suContra = 'yes'
        if (this.state.usuario === usuarioReg && this.state.contra === suContra) {
            this.setState({
                usuario: '',
                contra: '',
            })
            this.props.navigation.navigate('Home')
        } else {
            Alert.alert("Datos inconsistentes", "Se equivocó al ingresar los datos o el usuario no está registrado")
        }

    }

    registrarUsuario = () => {
        this.props.navigation.navigate('Register')
    }


    render() {
        return (
            <View style={styles.loginContainer}>

                <Image
                    source={logo} style={styles.logo}>
                </Image>

                <Text style={styles.textLogo}>
                    Sistema de Viaje Compartido del ITCG
                </Text>

                <KeyboardAvoidingView behavior="padding">

                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(usuario) => this.setState({ usuario })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        placeholder="Usuario o correo"
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        returnKeyType="next"
                        underlineColorAndroid='transparent'
                        value={this.state.usuario}
                    />

                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Contraseña"
                        onChangeText={(contra) => this.setState({ contra })}
                        onSubmitEditing={(event) => this.iniciarSesion()}
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.passwordInput = input}
                        returnKeyType="done"
                        value={this.state.contra}
                        secureTextEntry
                    />
                </KeyboardAvoidingView>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={this.iniciarSesion}
                >
                    <Text style={styles.botonText}>
                        ¡Vámonos!
                        </Text>

                </TouchableOpacity>

                <Text style={styles.labelRegistro}>
                    ¿Aún no estás registrado?
                    </Text>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={this.registrarUsuario}
                >
                    <Text style={styles.botonText}>
                        Crear Cuenta
                        </Text>

                </TouchableOpacity>

            </View>
        )
    }
}