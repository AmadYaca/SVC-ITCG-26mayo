import React, { Component } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../../styles/LoginStyles';
import logo from '../../imagenes/registro.png'

export default class Registro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usuario: "",
            contra: "",
            registroValido: "",
        }

        //this.addItem = this.addItem.bind(this);
    }

    addItem() {

    }

    registrarUsuario = () => {
        if (this.state.contra === this.state.contraValida) {
            this.props.navigation.navigate('Home')

            Alert.alert('Éxito en el Registro', 'Usuario registrado')

        } else {
            Alert.alert('Error de Confirmación', 'Las contraseñas no coinciden')
        }
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
                        onChangeText={(usuarioIngresado) => this.setState({ usuario: usuarioIngresado })}
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
                        onChangeText={(contraIngresada) => this.setState({ contra: contraIngresada })}
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
                        onChangeText={(confirmacionContra) => this.setState({ contraValida: confirmacionContra })}
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