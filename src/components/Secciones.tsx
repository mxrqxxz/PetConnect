import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { Seccion } from './Seccion'

export const Secciones = () => {
    return (
        <View>
            <View style={GlobalStyles.seccion}>
                <Seccion imagen={require('../../assets/images/huella.png')} href='/drawer/rescate'>Patitas al rescate</Seccion>
                <Seccion imagen={require('../../assets/images/patasenmarcha.png')} href='/drawer/perros'>Patas en marcha</Seccion>
                <Seccion imagen={require('../../assets/images/refugiodepatitas.png')} href='/drawer/refugio'>Refugio de patitas</Seccion>
            </View>
            <View style={GlobalStyles.seccion}>
                <Seccion imagen={require('../../assets/images/comunidadanimal.png')} href='/drawer/comunidad'>Comunidad animal</Seccion>
                <Seccion imagen={require('../../assets/images/sobre.png')} href='/'>Sobre Petconnect</Seccion>
            </View>
        </View>
    )
}