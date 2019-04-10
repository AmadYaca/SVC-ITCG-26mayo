import React, { Component } from 'react'
import { 
    Dimensions, 
    KeyboardAvoidingView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity,
    View
} from 'react-native'


const { width: WIDTH } = Dimensions.get('window')
export class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <StatusBar barstyle="light-content" />

                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    placeholder="Usuario o correo"
                    placeholderTextColor={'rgba(0,0,0,0.4)'}
                    returnKeyType="next"
                    underlineColorAndroid='transparent'>
                </TextInput>

                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Contraseña"
                    placeholderTextColor={'rgba(0,0,0,0.4)'}
                    ref={(input) => this.passwordInput = input}
                    returnKeyType="go"
                    secureTextEntry>
                </TextInput>

                <TouchableOpacity 
                    style={styles.botonLogin}
                    >
                    <Text style={styles.botonText}>
                        ¡Vámonos!
                    </Text>
                    
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    botonLogin: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 3,
        //width: 130,
    },
    botonText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700'
    },
    container: {
        padding: 20,
    },
    input: {
        width: WIDTH - 45,
        height: 37,
        borderRadius: 8,
        fontSize: 18,
        paddingTop: 0,
        paddingBottom: 3,
        paddingLeft: 27,
        backgroundColor: 'rgba(0,0,0,0.25)',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 10,
    },
    fb:{
        margin: 20,
        padding:17
    }
})