import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width

export default class Description extends Component {
    static navigationOptions = {
        title: 'Description'
    }

    render() {
        const { anime } = this.props.navigation.state.params
        return (
           <ScrollView>
               <Image 
                    source={{uri: `${anime.attributes.posterImage.tiny}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                />
                <Text style={{padding:10, fontSize:20}}>{attributes.titles.en_jp}</Text>
                <Text style={{padding:10}}>{anime.attributes.synopsis}</Text>
           </ScrollView> 
        )
    }
}