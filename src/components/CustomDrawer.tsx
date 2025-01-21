import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { GlobalStyles } from '../theme/GlobalStyles'

const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={GlobalStyles.drawerUserContainer}>
        <Image style={GlobalStyles.drawerUserImg}
                source={require('../../assets/images/fotoperfil.png')}
        />
        <Text style={[GlobalStyles.textoNegrita, GlobalStyles.textoPerfil]}>Sonia Putellas</Text>
        <Text
            style={[GlobalStyles.textoNegrita, GlobalStyles.textoPerfil, GlobalStyles.textoSubrayado]}>
            soniaputellas@gmail.com
        </Text>
      </View>

      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer