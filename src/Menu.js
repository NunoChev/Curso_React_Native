/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
//Modulo importado sem o Default 
import {Inverter, Lotto } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador />

    },
    Lotto: {
        screen: () => <Lotto numeros ={8} />,
        navigationOptions: { title: 'Lotoo'}
    },
    Inverter: {
        screen: () => <Inverter texto='RN !' />
    },
    ParImpar:{
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!' />
    }
}, {drawerWidth: 300 })