import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableHighlight, StyleSheet, View } from 'react-native'

import MapView, { Polyline, Marker } from 'react-native-maps'
//import MapViewDirections from 'react-native-maps-directions'
import myKey from '../../google_api_key'
import PolyLine from '@mapbox/polyline'
import _ from 'lodash'

export default class Destino extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            destination: "",
            predictions: [],
            pointCoords: [],
            error: "",
        }
        this.onChangeDestinationDebounced = _.debounce(
            this.onChangeDestination, 650)
    }

    //OBTIENE LA UBICACIÓN EXACTA DEL USUARIO
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },
            error => {
                this.setState({ error: error.message })
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 2000 }
        );
    }

    async getRouteDirections(destinationPlace, destinationName) {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${
                this.state.latitude
                },${this.state.longitude}&destination=place_id:${destinationPlace}&key=${myKey}`
            )
            const json = await response.json();
            const points = PolyLine.decode(json.routes[0].overview_polyline.points)
            const pointCoords = points.map(point => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({
                pointCoords,
                predictions: [],
                destination: destinationName
            })
            Keyboard.dismiss()
            this.map.fitToCoordinates(pointCoords)
        } catch (error) {
            console.error(error)//"Selecciona tu destino")
        }
    }

    async onChangeDestination(destination) {
        this.setState({ destination })

        const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${myKey}
            &input=${destination}
            &location=${this.state.latitude}, ${this.state.longitude}
            &radius=20`//2000`
        try {
            const result = await fetch(apiUrl)
            const json = await result.json()
            this.setState({
                predictions: json.predictions
            })
        } catch (err) {
            console.error(err);//alert(err.message)
        }
    }

    render() {

        let marker = null;
        if (this.state.pointCoords.length > 1) {
            let last_point = this.state.pointCoords.length - 1
            marker = (
                <Marker
                    draggable={true}
                    coordinate={this.state.pointCoords[last_point]}
                >
                    <View style={styles.radius}>
                        <View style={styles.marker} />
                    </View>
                </Marker>
            )
        }

        const predictions = this.state.predictions.map(prediction => (
            <TouchableHighlight
                key={prediction.id}
                onPress={() =>
                    this.getRouteDirections(prediction.place_id, prediction.structured_formatting.main_text)
                }
            >
                <View>
                    <Text style={styles.suggestions}>{prediction.structured_formatting.main_text}</Text>{/*description en lugar de structured_formattin*/}
                </View>
            </TouchableHighlight>
        ))

        const ruta = [
            {
                //tuxpan
                latitude: 19.55498,
                longitude: -103.37763833333332,
            },
            {
                //guzman
                latitude: 19.7046600,
                longitude: -103.4617000,
            }
        ]

        return (
            <View style={styles.container}>
                <MapView
                    ref={map =>
                        this.map = map
                    }
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,//0.0030,
                        longitudeDelta: 0.0121//0.0030,
                    }}
                    showsUserLocation={true}
                >
                    <Polyline
                        coordinates={this.state.pointCoords}
                        strokeWidth={4}
                        strokeColor="green"
                    />
                    {marker}
                </MapView >

                <TextInput
                    style={styles.destinationInput}
                    placeholder="¿A dónde vas?"
                    value={this.state.destination}
                    clearButtonMode="always"
                    onChangeText={destination => {
                        //esta linea no la tiene, sera ee problema?
                        this.setState({ destination })
                        this.onChangeDestinationDebounced(destination)
                    }}
                />
                {predictions}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    destinationInput: {
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: "white",
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'red',
    },
    radius: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,122,255, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(0,122,255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    suggestions: {
        backgroundColor: "white",
        padding: 5,
        fontSize: 18,
        borderWidth: 0.5,
        marginHorizontal: 5,
    }
});