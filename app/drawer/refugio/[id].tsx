import { View, Text, Image, StyleSheet } from 'react-native';
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
        <Text style={styles.name}>{perro.nombre}</Text>
        <View style={styles.contenedorCiudad}>
          <Image source={require("../../../assets/images/pin.png")} style={styles.pin} />
          <Text style={styles.ciudad}>{perro.ciudad}</Text>
        </View>
        <View style={styles.contenedorInfo}>
          <Text style={styles.info}>Sexo</Text>
          <Text style={styles.info}>{perro.sexo}</Text>
          <Text style={styles.info}>Edad</Text>
          <Text style={styles.info}>{perro.edad}</Text>
          <Text style={styles.info}>Tipo</Text>
          <Text style={styles.info}>{perro.Tipo}</Text>
        </View>
        <View>
          <Image source={perro.fotoEncargada} style={styles.image} />
          <View style={styles.contenedorInfoProtectora}>
            <Text style={styles.name}>{perro.encargada}</Text>
            <Text style={styles.name}>{perro.protectora}</Text>
          </View>
          <View>
            <Image></Image>
          </View>
          <View>
            <Image></Image>
          </View>
        </View>
        <Text>{perro.descripcion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDB672',
    padding: 40,
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
    height: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  pin:{
    width: 30,
    height: 30,
    marginRight: 10,  
  },
  ciudad:{
    fontSize: 23,
    color: 'rgba(54, 98, 136, 0.84)',
    marginBottom: 10,
    marginLeft: -5,
  },
  contenedorInfo:{
    flexDirection: 'row',
    gap: 10,
  },
  name: {
    fontSize: 30,
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
  contenedorInfoProtectora:{

  },
  contenedorCiudad:{
    flexDirection: 'row',
  }
});

export default DetallePerros;
