import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as React from "react";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={styles.containerMapa}>
      <MapView
        style={styles.mapa}
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

      <View style={styles.zonaBuscador}>
        <View style={styles.buscador}>
          <Text style={styles.textoBuscador}>Buscar...</Text>
        </View>
        <View style={styles.buscadorPequeño}>
          <Image
            style={styles.iconoBuscador}
            source={require("../../../assets/images/iconoBuscador.png")}
          />
        </View>
      </View>
      
      <View style={styles.espacioSituacion}>
        <Text style={styles.espacioSituacionTexto}>Describe la situación aquí...</Text>
      </View>

      <Pressable style={styles.botonRescate}>
        <Text style={styles.textoBotonRescate}>Enviar</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    marginTop: "-15%",
    width: "100%",   
    height: "70%",   
  },
  containerMapa: {
    width: "100%",
    height: "100%",  
    flex: 1,         
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(54, 98, 136, 0.84)",
  },

  zonaBuscador: {
    flexDirection: "row",
    width: "100%",
  },
  buscador: {
    width: "75%",
    height: 42,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  textoBuscador: {
    fontSize: 20,
    color: "rgba(54, 98, 136, 0.84)",
    marginLeft: 10,
    marginTop: "1.5%",
  },
  buscadorPequeño: {
    marginTop: 20,
    marginLeft: 10,
    width: "12%",
    height: 42,
    backgroundColor: "white",
    borderRadius: 10,
  },
  iconoBuscador: {
    width: 30,
    height: 30,
    marginLeft: 9,
    marginTop: 5,
  },
  espacioSituacion:{
    backgroundColor: "white",
    width: "90%",
    height: 100,
    marginTop: 20,
    borderRadius: 10,
  },
  espacioSituacionTexto:{
    fontSize: 15,
    color: "rgba(54, 98, 136, 0.84)",
    marginLeft: 10,
    marginTop: "1.5%",
  },

  botonRescate:{
    width: "27%",
    height: "7%",
    borderRadius: 30,
    backgroundColor: "white",
    marginTop: 20,
  },
  textoBotonRescate:{
    textAlign: "center",
    marginTop: 13,
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 20,
    fontWeight: "bold",
  }

});
