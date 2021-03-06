/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component{
   //Estados
    state = {
        //numero: this.props.numeroInicial
        numero: 0
    }
    maisUm() {
        this.setState({ numero: this.state.numero + 1})
    }

    limpar = () => {
        //this.setState({ numero: this.props.numeroInicial})
        this.setState({ numero: 0})
    }
    
    render(){
       
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.numero}</Text>
                <TouchableHighlight
                  //Passar a funcao do metodo this
                  onPress={() => this.maisUm()}
                  onLongPress={this.limpar}>
                  <Text>Incrementar/Zerar</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}