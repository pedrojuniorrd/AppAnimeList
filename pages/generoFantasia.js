import React from 'react'
import { TouchableOpacity, View, FlatList, Text, Image, ScrollView } from 'react-native'






export default class generoFantasia extends React.PureComponent {
  static navigationOptions = {
    title: 'generoFantasia'
  }

  state = {
    data: []
  }

  async componentDidMount() {
      const response = await fetch('https://kitsu.io/api/edge/anime?filter[genres]=fantasy');
      const responseJson = await response.json()
      this.setState({ data: responseJson.data })
    
  }


_renderItem = ({ item }) => {

  return (
  
      <TouchableOpacity onPress={() => this._onItemPress(item)} style={{ flexDirection: 'row', padding: 10, alignItems: 'center' }}>
        <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={{ uri: `${item.attributes.posterImage.original}}` }} />
        <Text style={{ marginLeft: 10 }}>{item.attributes.titles.en_jp}</Text>
      </TouchableOpacity>
  )
}

_onItemPress = (item) => {
  //this.props.navigation.navigate('Description', { anime:item })
  //this.props.navigate('Description',{anime:item})
  this.props.navigation.navigate('Seventh', { anime:item })
 console.log(item)
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



