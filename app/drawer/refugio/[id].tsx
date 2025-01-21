import { View, Text, Image, StyleSheet,Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { perros } from '@/data/perros.data';

const DetallePerros = () => {
  const { id } = useLocalSearchParams();

  const perro = perros.find((per) => per.id === id);

  if (!perro) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>El perro no se encuentra.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.tarjeta}>
        <Image source={perro.foto} style={styles.image} />
        <View style={styles.punto}/>
        <Text style={styles.name}>{perro.nombre}</Text>
        <Image source={require("../../../assets/images/favorito.png")} style={styles.favorito}/>
        <View style={styles.contenedorCiudad}>
          <Image source={require("../../../assets/images/pin.png")} style={styles.pin} />
          <Text style={styles.ciudad}>{perro.ciudad}</Text>
        </View>
        <View style={styles.contenedorInfo}>
          <View style={styles.contenedorInfoPequeño}>
            <Text style={styles.contenedorTitulo}>Sexo</Text>
            <Text style={styles.contenedorTexto}>{perro.sexo}</Text>
          </View>
          <View style={styles.contenedorInfoPequeño}>
            <Text style={styles.contenedorTitulo}>Edad</Text>
            <Text style={styles.contenedorTexto}>{perro.edad}</Text>
          </View>
          <View style={styles.contenedorInfoPequeño}>
            <Text style={styles.contenedorTitulo}>Tipo</Text>
            <Text style={styles.contenedorTexto}>{perro.Tipo}</Text>
          </View>
        </View>
        <View style={styles.contenedorProtectora}>
          <Image source={perro.fotoEncargada} style={styles.fotoEncargada} />
          <View>
            <Text style={styles.nombreEncargada}>{perro.encargada}</Text>
            <Text style={styles.nombreProtectora}>{perro.protectora}</Text>
          </View>
          <View style={styles.contenedorIcono}>
            <Image source={require("../../../assets/images/phone.png")}/>
          </View>
          <View style={styles.contenedorIcono}>
            <Image source={require("../../../assets/images/mensaje.png")}/>
          </View>
        </View>
        <Text style={styles.descripcion}>{perro.descripcion}</Text>
      </View>
      <Pressable style={styles.botonPerro}>
        <Text style={styles.textoBotonPerro}>DAME UN HOGAR</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDB672',
    padding: 20,
  },
  botonPerro:{
    width: "95%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30, 
  },
  textoBotonPerro: {
    textAlign: "center",
    color: "white",
    fontSize: 20, 
  },
  favorito:{
    width: 40,
    height: 40,
    position: "absolute",
    right: "10%",
    top: "42%",
  },
  contenedorIcono:{
    backgroundColor: "#FDB672",
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  punto:{
    width: 18,
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    height: 18,
    borderRadius: 100,
    marginLeft: "47%",
  },
  nombreEncargada:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(54, 98, 136, 0.84)',
  },
  nombreProtectora:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(54, 98, 136, 0.84)',
  },
  descripcion:{
    fontSize: 15,
    color: 'rgba(54, 98, 136, 0.84)',
    marginTop: 20,
  },
  fotoEncargada:{
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  tarjeta: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    height: "85%",
    marginTop: -70,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  pin:{
    width: 25,
    height: 25,
    marginRight: 10,  
  },
  ciudad:{
    fontSize: 20,
    color: 'rgba(54, 98, 136, 0.84)',
    marginBottom: 10,
    marginLeft: -5,
  },
  contenedorInfo:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    justifyContent: "center"
  },
  contenedorTitulo:{
    fontSize: 17,
    color: 'rgba(54, 98, 136, 0.84)',
  },
  contenedorTexto:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(54, 98, 136, 0.84)',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(54, 98, 136, 0.84)',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: 'gray',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },

  contenedorCiudad:{
    flexDirection: 'row',
  },
  contenedorInfoPequeño:{
    flexDirection: 'column',
    backgroundColor: "#FDB672",
    width: 90,
    height: 80,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorProtectora:{
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  }
});

export default DetallePerros;
