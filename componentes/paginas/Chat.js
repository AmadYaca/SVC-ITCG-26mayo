import React from 'react';
import { Button, FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import { Constants } from 'expo'
import firebase from 'firebase'

var database = firebase.database()

export default class Chat extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "",
            messages: [],
        }

        this.addOfertaCarro = this.addOfertaCarro.bind(this);
    }

    componentDidMount() {
        //I just erase de .once method and stopped showing data twice :) so obvious

        //metodo que recarga la lista cuando agregamos un nuevo registro
        database
            .ref('ofertas/carros')
            .on("child_added", snapshot => {
                const data = snapshot.val()
                //jsonData = JSON.stringify(data)

                if (data) {
                    this.setState(prevState => ({
                        messages: [data, ...prevState.messages]
                    }))
                }
            })

    }

    addOfertaCarro() {
        if (!this.state.message) return;

        //esta constante guarda la referencia a la bd
        const oftCarros = database
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
                    keyExtractor={(item, index) => index.toString()}
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