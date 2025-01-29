import { Text, View, Image } from 'react-native'
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import React from 'react'

export const Notificaciones = () => {
    return (
        <View style={GlobalStyles.notificacionCuadro}>
            <View style={GlobalStyles.notificacionCuadroTitulo}>
                <Text style={GlobalStyles.textoNotificacionesTitulo}>Notificaciones +2</Text>
                <Image style={GlobalStyles.fotoNotificacionFlecha} source={require('../../assets/images/flechaAbajo.png')} />
            </View>
            <View style={GlobalStyles.notificacion}>
                <Image style={GlobalStyles.fotoNotificacion} source={require('../../assets/images/adoptMe.png')} />
                <View style={[GlobalStyles.centradoVertical, GlobalStyles.enLinea]}>
                    <Text style={GlobalStyles.textoNegroNormal}>
                        Mensaje de:{' '}
                    </Text>
                    <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>
                        Perros Abandona2
                    </Text>
                </View>
            </View>
            <View style={GlobalStyles.notificacion}>
                <Image style={GlobalStyles.fotoNotificacion2} source={require('../../assets/images/manos.png')} />
                <View style={[GlobalStyles.centradoVertical, GlobalStyles.enLinea]}>
                    <Text style={[GlobalStyles.textoNegroNormal, , GlobalStyles.textoNegrita]}>
                        {'  '}ToniAnzis{' '}
                    </Text>
                    <Text style={GlobalStyles.textoNegroNormal}>
                        respondió a su post
                    </Text>
                </View>
            </View>
        </View>
    )
}