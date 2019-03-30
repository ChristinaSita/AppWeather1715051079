import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";

export default class Cuaca1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,

      }
    };
  }
getWeather= () => {
  let url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    this.state.city +
    "&appid=f77fe11af3635c41c4cac80a5cfe9715&units=metric";
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>

            <Header judul={"Prakiraan Cuaca"} />
      <View style={styles.box1}>
          <Text style={styles.textKota}> Masukan Nama Kota </Text>
          <TextInput
                style={styles.textInput}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <TouchableHighlight
            style={styles.buttonStyle}
                          onPress={() => this.getWeather()}
            >
            <Text style={{color: '#fff'}}>Cari</Text>

            </TouchableHighlight>
      </View>

      <View style={styles.box2}>
        <View style={styles.boxHasil}>
          <Text> City : { this.state.city} </Text>
        </View>
        <View style={styles.boxHasil}>
          <Text> Suhu : { this.state.forecast.temp} </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.boxHasil}>
          <Text> Cuaca : { this.state.forecast.main} </Text>
        </View>
        <View style={styles.boxHasil}>
          <Text> Deskripsi : { this.state.forecast.description} </Text>
        </View>
      </View>
            <Footer judul={"Copyright @Christina Sita"} />
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'cyan',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#00CCFF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },

  box2: {
    flex: 1,
    backgroundColor: '#00CCFF',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },

  boxHasil: {
    width: 180,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingRight: 20,
  },
  buttonStyle: {
    backgroundColor: '#003399',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
},

textKota: {
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 20 ,
        color: '#fff',
    },
    textInput: {
        height: 40,
        color: 'white',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'magenta',
        color: '#fff'
    }

});
