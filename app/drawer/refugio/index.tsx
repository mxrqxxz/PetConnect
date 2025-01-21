
import React from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { perros } from "@/data/perros.data";
import { Link } from "expo-router";

export default function Index() {
  return (
    <FlatList
      data={perros}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListHeaderComponent={
        <View style={styles.containerRefugio}>
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
          <View style={styles.cartelInfo}>
            <Text style={styles.cartelInfoTitulo}>
              Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.
            </Text>
            <Text style={styles.cartelInfoTexto}>
              Si no puedes cuidarlo hoy, mañana y siempre; no lo adoptes.
            </Text>
            <Image
              style={[styles.cartelRefugio]}
              source={require("../../../assets/images/cartelRefugio.png")}
            />
          </View>
          <Text style={styles.textoCategorias}>Categorias</Text>
          <Text style={styles.textoVerTodo}>Ver todo</Text>
          <View style={styles.seccion}>
            <View>
              <View style={styles.seccionCuadro}>
                <Image
                  source={require("../../../assets/images/gato.png")}
                  style={styles.imagenSeccion}
                />
                <Text style={styles.textoFiltroRefugio}>Gatos</Text>
              </View>
            </View>
            <View>
              <View style={styles.seccionCuadro}>
                <Image
                  source={require("../../../assets/images/perro.png")}
                  style={styles.imagenSeccion}
                />
                <Text style={styles.textoFiltroRefugio}>Perros</Text>
              </View>
            </View>
            <View>
              <View style={styles.seccionCuadro}>
                <Image
                  source={require("../../../assets/images/conejo.png")}
                  style={styles.imagenSeccion}
                />
                <Text style={styles.textoFiltroRefugio}>Conejos</Text>
              </View>
            </View>
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.itemPerros}>
          <Image source={item.foto} style={styles.imagenPerro} />
          <Image source={require("../../../assets/images/favorito.png")} style={styles.favorito}/>          
          <Text style={styles.nombrePerro}>{item.nombre}</Text>
          <Text style={styles.infoPerro}>{item.info}</Text>
          <Link style={styles.infoPerro} href={`../../perros/${item.id}`}>Ver detalle</Link>
        </View>
      )}
      contentContainerStyle={styles.seccionPerros}
    />
  );
}

const styles = StyleSheet.create({
  containerRefugio: {
    backgroundColor: "white",
  },
  zonaBuscador: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  buscador: {
    width: "75%",
    height: 42,
    borderColor: "rgba(54, 98, 136, 0.84)",
    borderWidth: 2,
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
    borderColor: "rgba(54, 98, 136, 0.84)",
    borderWidth: 2,
    borderRadius: 10,
  },
  iconoBuscador: {
    width: 30,
    height: 30,
    marginLeft: 7,
    marginTop: 3,
  },
  cartelInfo: {
    marginLeft: 20,
    width: "90%",
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    borderRadius: 10,
    padding: 10,
  },
  cartelInfoTitulo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  cartelInfoTexto: {
    color: "white",
    fontSize: 17,
    marginTop: 10,
    marginBottom: -10,
  },
  cartelRefugio: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginTop: 5,
    marginBottom: -30,
  },
  textoCategorias: {
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 19,
    marginTop: 20,
    marginLeft: 20,
  },
  textoVerTodo: {
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 19,
    marginTop: -25,
    marginLeft: "75%",
    textDecorationLine: "underline",
  },
  seccion: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "3%",
  },
  seccionCuadro: {
    backgroundColor: "#FDB672",
    borderRadius: 20,
    height: 110,
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginBottom: 30,
  },
  textoFiltroRefugio: {
    fontSize: 14,
    color: "rgba(54, 98, 136, 0.84)",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  seccionPerros: {
    paddingBottom: 20,
    backgroundColor: "white",
  },
  itemPerros: {
    backgroundColor: "#FDB672",
    borderRadius: 10,
    padding: 10,
    width: "40%",
    marginRight: 0,
    marginBottom: 20,
    marginLeft: 25,
  },
  imagenPerro: {
    width: "100%",
    height: 100,
    marginBottom: 10,
  },
  nombrePerro: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(54, 98, 136, 0.84)",
  },
  infoPerro: {
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 14,
    marginBottom: 10,
  },
  imagenSeccion: {
    width: 60, 
    height: 60,
    resizeMode: "contain",
    marginBottom: 5,
  },

  favorito:{
    width: 40,
    height: 40,
    position: "absolute",
    right: "10%",
    top: "60%",
  }
  
});
