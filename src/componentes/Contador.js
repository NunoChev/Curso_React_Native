/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component{
   //Estados
    state = {
        numero: 0
    }
    maisUm = () => {
        
    }
    
    render(){
       
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                  onPress={this.maisUm}
                  onLongPress={this.limpar}>
                  <Text>Incrementar/Zerar</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}