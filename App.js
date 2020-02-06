import React from 'react'
import { StatusBar, Platform } from 'react-native'
import telaLogin from './pages/telaLogin'
import telaBusca from './pages/telaBusca'
import Description from './pages/Description'
import generoSports from './pages/generoSports'
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  telaLogin: {
    screen: telaLogin
  },
  Description: {
    screen: Description
  },
  telaBusca: {
    screen: telaBusca
  },
  generoSports: {
    screen: generoSports
  },


},



{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App