import React, { Component } from 'react';
import { Text, View, TextInput, ImageBackground, Image, StyleSheet, TouchableOpacity, Button,Dimensions } from 'react-native';
import { firebaseAuth } from '../config.js'



//Primeira Tela
export default class telaLogin extends Component {
  static navigationOptions = {
    title: 'telaLogin'
  }

 // login(user, password) {

 //   this.callApi(user, password).then((res) => {
  //    console.log(res.login)
   //   this.props.navigation.navigate('First')
   //   if (res.login) {

//      }
//
 //   })

 // }

  //Funcao para chamar Api
 // callApi = async (user, password) => {
    // console.log(user)
  //  let response = await fetch('http://192.168.55.2:3000/auth/' + user + '/' + password);
    // console.log(response)
   // let body = await response.json();
   // if (response.status !== 200) throw Error(body.message);
   // return body;
  //};

  constructor(props) {
    super(props);

  }

  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => this.props.navigation.navigate('First'))
.catch(error => this.setState({ errorMessage: error.message }));
    console.log('handleLogin')
    }



  render() {


    return (


      <View style={styles.MainContainer}>

        <View style={{ flex: 1 }} >

          <ImageBackground

            source={require('../images/teste.jpg')}
            style={{
              width: "100%",
              height: "100%",
              position: 'absolute',
            }}>

            <TextInput style={styles.TextInput}
             
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            >
            </TextInput>

            <TextInput style={styles.TextInput}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            >
            </TextInput>

            <TouchableOpacity onPress={this.handleLogin}
              style={styles.Gomes}
              activeOpacity={0.5}
             // onPress={() => this.props.navigation.navigate('Second')}
             //onPress={() => this.login(this.state.user,this.state.password)}
            >

              <Image
                source={require('../images/icon.jpg')}
                style={styles.ImageIconStyle} />
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}> Entrar </Text>
            </TouchableOpacity>
            <Button
     title="Não possui uma conta ainda? Cadastre-se!" color="red"
     onPress={() => this.props.navigation.navigate('Eighth')}
     />

          </ImageBackground>

        </View>

      </View>

    );
  }
}

telaLogin.navigationOptions = {
  title: 'Login',
}

//Estilos
const heightConst = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  MainContainer: {
   
    height: heightConst - 50,
    //justifyContent: 'center',
    //alignItems: 'center',
    
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
    marginLeft: "25%"
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

