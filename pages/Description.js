import React, { Component } from 'react'
import { ScrollView, Image, Dimensions, Text } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('screen').width
import anime from './generoSports'
import navigation from 'react-navigation'

export default class Description extends Component {

   
    render() {
        const { anime } = this.props.navigation.state.params
        return (
           <ScrollView>
               <Image 
                    source={{uri: `${anime.attributes.posterImage.original}`}} 
                    style={{width:SCREEN_WIDTH, height:SCREEN_WIDTH}}
                />
                <Text style={{padding:10, fontSize:20}}>{anime.attributes.titles.en_jp}</Text>
                <Text style={{padding:10}}>{anime.attributes.synopsis}</Text>
           </ScrollView> 
        )
    }
}