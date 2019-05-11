import React from 'react';
import { Button, FlatList, StyleSheet, View, TextInput } from 'react-native';
import { Constants } from 'expo'
import firebase from 'firebase'

export default class Chat extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "2",
            message: "",
            messages: [],
        }

        this.addOfertaCarro = this.addOfertaCarro.bind(this);
    }

    addOfertaCarro() {
        if (!this.state.message) return;

        //esta constante guarda la referencia a la bd
        const oftCarros = firebase
            .database()
            .ref('ofertas/carros')
            .push();

        //newMsg.set(this.state.message, () => this.setState({ message: '' }))
        oftCarros.set(this.state.message, () => this.setState({ message: '' }))

    }

    render() {
        return (
            <View style={styles.container}>
                <View styles={styles.msgBox}>

                    <Button
                        title="Enviar"
                        onPress={this.addOfertaCarro}>
                    </Button>
                    <TextInput
                        onChangeText={(text) => this.setState({ message: text })}
                        placeholder='Escribir mensaje'
                        style={styles.txtInput}
                        value={this.state.message}
                    />
                </View>
                <FlatList data={this.state.messages}
                    renderItem={
                        //Anonymous react component  
                        ({ item }) =>
                            <View style={styles.listItemContainer}>
                                <Text style={styles.listItem}>
                                    {item}
                                </Text>
                            </View>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        marginTop: Constants.statusBarHeight,
    },
    listItem: {
        fontSize: 20,
        padding: 10,
    },
    listItemContainer: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5,
    },
    msgBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: 20,
        backgroundColor: '#fff',
    },
    txtInput: {
    }
});