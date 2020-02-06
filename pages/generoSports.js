import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image, ScrollView } from 'react-native'
import Description from './Description'
import { StackNavigator } from 'react-navigation'





export default class generoSports extends React.PureComponent {
  static navigationOptions = {
    title: 'generoSports'
  }

  state = {
    data: []
  }

  async componentDidMount() {
      const response = await fetch('https://kitsu.io/api/edge/anime?filter[genres]=sports');
      const responseJson = await response.json()
      this.setState({ data: responseJson.data })
    
  }


_renderItem = ({ item }) => {

  return (

  
      <TouchableOpacity onPress={() => this._onItemPress(item)} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: `${item.attributes.posterImage.tiny}}` }} />
        <Text style={{ marginLeft: 10 }}>{item.attributes.titles.en_jp}</Text>
      </TouchableOpacity>
    



  )
}

_onItemPress = (item) => {
  this.props.navigation.navigate('Description', { anime: item })
}


render() {

  return (

    <FlatList
      data={this.state.data}
      renderItem={this._renderItem}
      keyExtractor={(item) => item.id}

      ItemSeparatorComponent={() =>
        <View
          style={{
            height: 1,
            backgroundColor: '#f7f7f7'
          }}
        />//fim VIEW
      }
    />//Fim FlatList



  )
}
}



