import React, { Component } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../../styles/LoginStyles';
import logo from '../../imagenes/registro.png'

import firebase from 'firebase'

export default class Registro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            clave: "",
            claveValida: "",
            
            messages:[],
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem() {

    }

    compararContra = () => {
        if (this.state.clave === this.state.claveValida) {
            this.registrarUsuario(this.state.email, this.state.clave)
        } else {
            Alert.alert('Error de Confirmación', 'Las contraseñas no coinciden')
        }
    }

    registrarUsuario = (email, clave) => {
        alert(this.state.email)
        firebase.auth().createUserWithEmailAndPassword(email, clave).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            if(errorCode == 'auth/weak-password'){
                alert("Contraseña muy débil")
            }else{
                alert(errorMessage)
            }
          });

        this.props.navigation.navigate('Home')

        Alert.alert('Éxito en el Registro', 'Usuario registrado')
        
    }

    regresarAlLogin = () => {
        this.props.navigation.navigate('Login')
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
                        onChangeText={(usuarioIngresado) => this.setState({ email: usuarioIngresado })}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        placeholder="Usuario o correo"
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.nomUsuario = input}
                        returnKeyType="next"
                        underlineColorAndroid='transparent'>
                    </TextInput>

                    {/*Contraseña*/}
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
                        secureTextEntry>
                    </TextInput>

                    {/*Confirmar*/}
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Confirmar contraseña"
                        onChangeText={(confirmacionContra) => this.setState({ claveValida: confirmacionContra })}
                        placeholderTextColor={'rgba(0,0,0,0.4)'}
                        ref={(input) => this.passwordConfirm = input}
                        returnKeyType="next"
                        secureTextEntry>
                    </TextInput>


                    {/*BOTON: Confirmar registro */}
                    <TouchableOpacity
                        style={styles.boton}
                        onPress={this.registrarUsuario}
                    >
                        <Text style={styles.botonText}>
                            Registrarse
                    </Text>

                    </TouchableOpacity>

                    {/*BOTON: Regresar a la Pág de inicio */}
                    <TouchableOpacity
                        style={styles.botonVolver}
                        onPress={this.regresarAlLogin}
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