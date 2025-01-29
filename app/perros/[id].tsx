import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { perros } from '@/data/perros.data';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '@/src/theme/GlobalStyles';
import { Tamanos } from '@/src/theme/Tamanos';
import { Colores } from '@/src/theme/Colores';
import { Boton } from '@/src/components/Boton';
import Toast from 'react-native-toast-message';

interface CustomToastProps {
  title: string;
  message: string;
}

const DetallePerros = () => {
  const { id } = useLocalSearchParams();

  const perro = perros.find((per) => per.id === id);

  const [favorito, setFavorito] = useState(perro?.favorito);

  const cambiarFavorito = () => {
    setFavorito(!favorito);
  }

  const mostrarCustomToast = () => {
    Toast.show({
      type: "customToast",
      props: {
        title: "¡Iniciando adopción!",
        message: "Se ha enviado la información para la posible adopción.",
      },
    });
  };

  const toastConfig = {
    customToast: ({ props }: { props: CustomToastProps }) => (
      <View style={GlobalStyles.customToastContainer}>
        <Text style={GlobalStyles.toastTitle}>{props.title}</Text>
        <Text style={GlobalStyles.toastMessage}>{props.message}</Text>
      </View>
    ),
  };

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    if (perro) {
      navigation.setOptions({
        headerShown: true,
        drawerInactiveTintColor: 'black',
        drawerActiveBackgroundColor: 'rgba(54, 98, 136, 0.84)',
        drawerActiveTintColor: 'white',
        title: perro.nombre,
        headerStyle: {
          backgroundColor: Colores.stackBar,
        },
        headerTintColor: Colores.stackBarColorLetra,
        headerTitleStyle: {
          fontFamily: 'WendyOne',
          fontSize: Tamanos.textoTitulo,
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <Image
            source={require('../../assets/images/logoPetConnect.png')}
            style={GlobalStyles.imagenLogin}
          />
        ),
      });
    }
  }, [navigation, perro]);


  if (!perro) {
    return (
      <View style={GlobalStyles.containerPerro}>
        <Text style={GlobalStyles.errorText}>El perro no se encuentra.</Text>
      </View>
    );
  }

  return (
    <View style={GlobalStyles.containerPerro}>
      <View style={GlobalStyles.tarjeta}>
        <Image source={perro.foto} style={GlobalStyles.image} />
        <View style={GlobalStyles.punto} />
        <Text style={GlobalStyles.name}>{perro.nombre}</Text>
        <Pressable onPress={cambiarFavorito} style={GlobalStyles.botonFavoritoPerro}>
          <Image source={favorito ? require("@/assets/images/favActivo.png") : require("@/assets/images/favorito.png")} style={GlobalStyles.favoritoPerro} />
        </Pressable>
        <View style={GlobalStyles.contenedorCiudad}>
          <Image source={require("../../assets/images/pin.png")} style={GlobalStyles.pin} />
          <Text style={[GlobalStyles.ciudad, GlobalStyles.azulTextoMediano]}>{perro.ciudad}</Text>
        </View>
        <View style={GlobalStyles.contenedorInfo}>
          <View style={GlobalStyles.contenedorInfoPequeño}>
            <Text style={GlobalStyles.pregunta}>Sexo</Text>
            <Text style={GlobalStyles.contenedorTexto}>{perro.sexo}</Text>
          </View>
          <View style={GlobalStyles.contenedorInfoPequeño}>
            <Text style={GlobalStyles.pregunta}>Edad</Text>
            <Text style={GlobalStyles.contenedorTexto}>{perro.edad}</Text>
          </View>
          <View style={GlobalStyles.contenedorInfoPequeño}>
            <Text style={GlobalStyles.pregunta}>Tipo</Text>
            <Text style={GlobalStyles.contenedorTexto}>{perro.Tipo}</Text>
          </View>
        </View>
        <View style={GlobalStyles.contenedorProtectora}>
          <Image source={perro.fotoEncargada} style={GlobalStyles.fotoEncargada} />
          <View>
            <Text style={GlobalStyles.nombreEncargada}>{perro.encargada}</Text>
            <Text style={GlobalStyles.nombreProtectora}>{perro.protectora}</Text>
          </View>
          <View style={GlobalStyles.contenedorIcono}>
            <Image style={GlobalStyles.contenedorIconoFoto} source={require("../../assets/images/phone.png")} />
          </View>
          <View style={GlobalStyles.contenedorIcono}>
            <Image style={GlobalStyles.contenedorIconoFoto} source={require("../../assets/images/mensaje.png")} />
          </View>
        </View>
        <Text style={GlobalStyles.descripcion}>{perro.descripcion}</Text>
      </View>
      <Boton
        onPress={mostrarCustomToast}
        style={GlobalStyles.botonPerro}
        textStyle={GlobalStyles.textoBotonPerro}
      >
        DAME UN HOGAR
      </Boton>
      <Toast config={toastConfig} />
    </View>
  );
};

export default DetallePerros;
