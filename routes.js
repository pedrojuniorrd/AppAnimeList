import React from 'react'
import { StatusBar, Platform } from 'react-native'
import DrawerNavigatorExample from './app'
import Description from './pages/Description'
import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
  Home: {
    screen: DrawerNavigatorExample
  },
  Description: {
    screen: Description
  },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App