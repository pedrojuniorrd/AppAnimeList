import React from 'react';
import { Text, View, Button, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class HomeScreen extends React.Component {



  render() {
    return (

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }} >
          <ImageBackground

            source={require('./images/teste.jpg')}
            style={{
              width: "100%",
              height: "100%",
              position: 'absolute',
            }}>

            <TextInput style={styles.TextInput}
              marginTop={500}
              placeholder="Login">
            </TextInput>

            <TextInput style={styles.TextInput}
              placeholder="Senha">
            </TextInput>

            <View style={styles.MainContainer}>

              <TouchableOpacity style={styles.Gomes}
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Voltar')}
              >


                <Image
                  source={require('./images/icon.jpg')}
                  style={styles.ImageIconStyle} />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Entrar </Text>
              </TouchableOpacity>

            </View>

          </ImageBackground>

        </View>

      </View>
    );
  }
}


class secondScreen extends React.Component {

  state = {

    titulo: 'Busque um anime!',
    sinopse: '',
    imagemURL: 'https://pm1.narvii.com/7448/43b58d836f51748db138766fc380123903ce5539r1-600-1024v2_hq.jpg',
    averageRate:''
  }

  animeSearch(texto) {
    this.callApi(texto)
      .then(res => {
        console.log(texto)
        if (texto == '') {
          this.setState({
            titulo: 'Busque um anime!',
            sinopse: '',
            imagemURL: 'https://pm1.narvii.com/7448/43b58d836f51748db138766fc380123903ce5539r1-600-1024v2_hq.jpg',
            averageRate:''
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

  callApi = async (texto) => {
    if (texto != undefined) {
      let response = await fetch('https://kitsu.io/api/edge/anime?filter[text]=' + texto);
      let body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;

    }


  };

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
              marginLeft:20,
              marginRight:20,
              borderRadius:10,
              marginTop:10
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
              borderRadius:10,
              marginTop:10,
              marginLeft:20,
              marginRight:20

            }}>
              {this.state.sinopse}
            </Text>
            
            <Text style={{
              backgroundColor: 'yellow',
            }}>
              Nota:{(this.state.averageRate/10).toFixed(1)}/10
            </Text>




          </ImageBackground>





        </View>


      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: HomeScreen,
    Voltar: secondScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },



  Gomes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff9933',
    borderWidth: 0.5,
    borderColor: '#ff9933',
    height: 40,
    width: 220,
    borderRadius: 10,
    margin: 5,
  },

  ImageIconStyle: {
    padding: 15,
    margin: -1,
    height: 40,
    width: 39,
    borderRadius: 5,
    resizeMode: 'stretch',

  },
  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 50,
    marginLeft: 50,
    fontSize: 20,


  },


  SeparatorLine: {
    backgroundColor: '#ff9933',
    width: 1,
    height: 40,
  },
  TextInput: {
    width: "90%",
    margin: 20,
    height: 40,
    borderColor: '#ff9933',
    borderWidth: 3,
    borderRadius: 10,
    opacity: 90,
    backgroundColor: '#667',

  }

});

