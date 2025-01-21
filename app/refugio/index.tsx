import { Text, View, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <View style={styles.zonaBuscador}>
        <View style={styles.buscador}>
          <Text style={styles.textoBuscador}>Buscar...</Text>
        </View>
        <View style={styles.buscadorPequeño}>
          <Image style={styles.iconoBuscador} source={require('../../assets/images/iconoBuscador.png')}/>
        </View>
      </View>
      <View style={styles.cartelInfo}>
        <Text style={styles.cartelInfoTitulo}>Buscar...</Text>
        <Text style={styles.cartelInfoTexto}>Buscar...</Text>
        <Image style={[styles.buscadorPequeño, GlobalStyles.imagenStack]} source={require('../../assets/images/iconoBuscador.png')}/>
      </View>
      <Text>Refugio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  zonaBuscador: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "10%",
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
  buscadorPequeño:{
    marginTop: 20,
    marginLeft: 10,
    width: "12%",
    height: 42,
    borderColor: "rgba(54, 98, 136, 0.84)",
    borderWidth: 2,
    borderRadius: 10,
  },
  iconoBuscador:{
    width: 30,
    height: 30,
    margin: "auto",
  },
  cartelInfo: {

  },
  cartelInfoTitulo:{

  },
  cartelInfoTexto:{

  },
});
