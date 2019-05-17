import React, { Component } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../../styles/LoginStyles';
import logo from '../../imagenes/registro.png'

import firebase from 'firebase'
const database = firebase.database()

export default class Registro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario: "",
            clave: "",
            confirmacion: "",
        }
    }

    borrarCamposDelRegistro = () => {
        this.setState({
            usuario: '',
            clave: '',
            confirmacion: '',
        })
    }

    compararContra = () => {
        if (this.state.clave === this.state.confirmacion) {
            this.addUser(this.state.usuario, this.state.clave)
        }
        else {
            Alert.alert('Error de Confirmación', 'Las claves no coinciden')
        }
    }

    addUser(usuario, clave) {
        
        var num = 3

        database.
            ref('usuarios/'+num).set({
                usuario: usuario,
                clave: clave,
            })

        alert('Bienvenido ' + usuario)
        this.borrarCamposDelRegistro()
        this.props.navigation.navigate("Home")
        //}
    }

    render() {
        return (
            <View style={styles.loginContainer}>
                <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>

                    <Image
                        source={logo} style={styles.logo}>
                    </Image>

                    {/*Nombre de Usuario*/}
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(usuarioIngresado) => this.setState({ usuario: usuarioIngresado })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        placeholder="Usuario o correo"
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.nomUsuario = input}
                        returnKeyType="next"
                        underlineColorAndroid='transparent'
                        value={this.state.usuario}>
                    </TextInput>

                    {/*Clave*/}
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Contraseña"
                        onChangeText={(contraIngresada) => this.setState({ clave: contraIngresada })}
                        onSubmitEditing={() => this.passwordConfirm.focus()}
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.passwordInput = input}
                        returnKeyType="next"
                        secureTextEntry
                        value={this.state.clave}>
                    </TextInput>

                    {/*Confirmación*/}
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Confirmar contraseña"
                        onChangeText={(confirmarClave) => this.setState({ confirmacion: confirmarClave })}
                        onSubmitEditing={() => this.props.navigation.navigate("Login")}
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.passwordConfirm = input}
                        returnKeyType="done"
                        secureTextEntry
                        value={this.state.confirmacion}>
                    </TextInput>

                    <TouchableOpacity
                        style={styles.boton}
                        onPress={
                            this.compararContra
                        }
                    >
                        <Text style={styles.botonText}>
                            Registrarse
                        </Text>

                    </TouchableOpacity>

                    {/*BOTON: Regresar a la Pág de inicio */}
                    <TouchableOpacity
                        style={styles.botonVolver}
                        onPress={() => this.props.navigation.navigate("Login")}
                    >
                        <Text style={styles.botonTextPeq}>
                            Volver a Inicio de Sesión
                        </Text>

                    </TouchableOpacity>

                </KeyboardAvoidingView>

            </View>
        );
    }
}