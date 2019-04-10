import {StyleSheet, Dimensions} from 'react-native';
import { Constants } from 'expo'

const { width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
    boton: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 43,
        marginBottom: 10,
        padding: 5,
        width: WIDTH - 45,
    },
    botonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '700'
    },
    botonTextPeq: {
        fontSize: 13,
        fontWeight: '500'
    },
    botonVolver: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        //textAlign: 'right',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    loginContainer: {
        marginTop: Constants.statusBarHeight,
        padding: 5,
    },
    input: {
        width: WIDTH - 45,
        height: 40,
        borderRadius: 8,
        fontSize: 18,
        paddingTop: 1,
        paddingBottom: 3,
        paddingLeft: 27,
        backgroundColor: 'rgba(0,0,0,0.25)',
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 15,
    },
    labelRegistro:{
        fontSize: 15,
    },
    logo: {
        width: 140,
        height: 100,
        opacity: 0.8,
        marginBottom: 10,
    },
    loginContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',//'#FFEB3B',//'#64DD17',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        alignItems: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: 20,
        opacity: 0.5,
        textAlign: 'center',
        width: 250,
        marginBottom: 5,
    },
})

export default styles;