import { View, Text, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../theme/GlobalStyles'
import { Link, LinkProps } from 'expo-router'

interface Props extends LinkProps {
    imagen: any
}

export const Seccion = ({ children, imagen, ...rest }: Props) => {
    return (
        <View>
            <View style={GlobalStyles.seccionCuadro}>
                <Link {...rest}>
                    <Image source={imagen} style={GlobalStyles.imagenSeccion} />
                </Link>
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>{children}</Text>
        </View>
    )
}