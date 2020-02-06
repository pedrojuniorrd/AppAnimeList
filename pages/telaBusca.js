import React, { Component } from 'react';

import { Text, View, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

//Tela 2
export default class telaBusca extends Component {
  static navigationOptions = {
    title: 'telaBusca'
  }
  //default State
  state = {

    titulo: 'Busque um anime!',
    sinopse: '',
    imagemURL: 'https://pm1.narvii.com/7448/43b58d836f51748db138766fc380123903ce5539r1-600-1024v2_hq.jpg',
    averageRate: ''
  }

  //Funcao de Busca
  animeSearch(texto) {
    this.callApi(texto)
      .then(res => {
        console.log(texto)
        if (texto == '') {
          this.setState({
            titulo: 'Busque um anime!',
            sinopse: '',
            imagemURL: 'https://pm1.narvii.com/7448/43b58d836f51748db138766fc380123903ce5539r1-600-1024v2_hq.jpg',
            averageRate: ''
          })
        } else {
          this.setState({
            titulo: res.data[0]['attributes']['titles']['en'],
            sinopse: res.data[0]['attributes']['synopsis'],
            imagemURL: res.data[0]['attributes']['posterImage']['original'],
            averageRate: res.data[0]['attributes']['averageRating']
          })
        }
      })
      .catch(err => console.log(err));
  }


  //Funcao para chamar Api
  callApi = async (texto) => {
    if (texto != undefined) {
      let response = await fetch('https://kitsu.io/api/edge/anime?filter[text]=' + texto);
      let body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;

    }


  };

  //Componentes main da Tela2
  render() {
    return (
      <View style={
        {
          flex: 1,

        }}>

        <View style={{ flexDirection: "row" }}>

          <TextInput style={{
            width: "98%",
            margin: 5,
            height: 45,
            borderColor: '#ff9933',
            borderWidth: 3,
            borderRadius: 10,
            opacity: 90,
            backgroundColor: '#667',
            fontSize: 20
          }}
            placeholder="Busca"
            onChangeText={texto => { this.animeSearch(texto) }}
          >
          </TextInput>
        </View>

        <View style={{ flex: 1 }}>


          <ImageBackground
            style={{
              height: "100%",
              width: "100%",



            }}

            source={{ uri: this.state.imagemURL }}>

            <Text style={{
              fontSize: 50,
              textAlign: 'center',
              backgroundColor: 'gray',
              opacity: 0.8,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 10,
              marginTop: 10
            }}>
              {this.state.titulo}
            </Text>

            <Text style={{
              backgroundColor: 'gray',
              opacity: 0.8,
              paddingLeft: 15,
              paddingRight: 15,
              fontSize: 15,
              textAlign: "justify",
              color: 'black',
              paddingTop: 15,
              borderRadius: 10,
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20

            }}>
              {this.state.sinopse}
            </Text>

            <Text style={{
              backgroundColor: 'yellow',
            }}>
              Nota:{(this.state.averageRate / 10).toFixed(1)}/10
                </Text>




          </ImageBackground>





        </View>


      </View>

    );
  }
}


//Estilos
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});