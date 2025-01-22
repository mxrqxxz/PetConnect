import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as React from "react";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import {Boton} from "@/src/components/Boton";
import { TextInput } from 'react-native';
import { useState } from "react";
import Toast from 'react-native-toast-message';
import { Buscador } from "@/src/components/Buscador";

interface CustomToastProps {
  title: string;
  message: string;
}

export default function Index() {

  const [text, setText] = useState(''); 

  const mostrarCustomToast = () => {
    Toast.show({
      type: "customToast",
      props: {
        title: "¡Rescate en marcha!",
        message: "Se ha enviado la información para el rescate.",
      },
    });
  };

  const mostrarCustomToast2 = () => {
    Toast.show({
      type: "customToast",
      props: {
        title: "Este mapa conecta a quienes necesitan ayuda con quienes están dispuestos a ofrecerla.",
        message: "Indica el punto donde un animal, una colonia o una situación requiere atención y descríbela para que podamos actuar juntos. \n\nLa ubicación se añadirá automáticamente cuando se seleccione en el mapa.",
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
  

  return (
    <View style={GlobalStyles.containerMapa}>
      <MapView
        style={GlobalStyles.mapa}
        initialRegion={{
          latitude: 37.6057928,
          longitude: -0.992766,
          latitudeDelta: 0.21,
          longitudeDelta: 0.21,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.6057928, 
            longitude: -0.992766,
          }}
        />

      </MapView>

      <Buscador
        stylezona={GlobalStyles.zonaBuscadorRescate}
        stylebuscador1={GlobalStyles.marginLeftTop20}
        stylebuscador2={GlobalStyles.buscadorRescate}
        styleTextoBuscador={GlobalStyles.textoBuscadorRescate}
        azulTextoMediano={GlobalStyles.azulTextoMediano}
        buscadorPequeñoRescate={GlobalStyles.buscadorPequeñoRescate}
        iconoBuscadorRescate={GlobalStyles.iconoBuscadorRescate}
      />
      
      <View style={GlobalStyles.espacioSituacion}>
        <TextInput
          style={GlobalStyles.espacioSituacionTexto}
          placeholder="Describe la situación aquí..."
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
      </View>
      <Pressable onPress={mostrarCustomToast2}>
        <Image source={require("../../../assets/images/info.png")} style={GlobalStyles.infoRescate} />
      </Pressable>
      <Boton 
          onPress={mostrarCustomToast} 
          style={GlobalStyles.botonRescate}
          textStyle={[GlobalStyles.textoBotonRescate, GlobalStyles.azulTextoMediano]}
      >
          Enviar
      </Boton>

      <Toast config={toastConfig} />
      
    </View>
  );
}
