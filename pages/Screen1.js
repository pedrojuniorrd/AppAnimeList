//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import all basic components

export default class Screen1 extends Component {
  //Screen1 Component
  render() {

    return (

      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }} >

          <ImageBackground

            source={require('../images/teste.jpg')}
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
                  source={require('../images/icon.jpg')}
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

