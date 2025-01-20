import { Text, View, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'

export const ZonaPerfil = () => {
    return (
        <View style={GlobalStyles.zonaPerfl}>
            <Image source={require('../../assets/images/fotoperfil.png')} style={GlobalStyles.imagenPerfil} />
            <View style={GlobalStyles.centradoVertical}>
                <Text style={[GlobalStyles.textoNegroMediano, GlobalStyles.textoNegrita]}>Sonia Putellas</Text>
                <Text
                    style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita, GlobalStyles.textoSubrayado]}>
                    soniaputellas@gmail.com
                </Text>
            </View>
        </View>
    )
}