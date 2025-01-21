import { Text, View, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={styles.containerRefugio}>
      <View style={styles.zonaBuscador}>
        <View style={styles.buscador}>
          <Text style={styles.textoBuscador}>Buscar...</Text>
        </View>
        <View style={styles.buscadorPequeño}>
          <Image style={styles.iconoBuscador} source={require('../../assets/images/iconoBuscador.png')}/>
        </View>
      </View>
      <View style={styles.cartelInfo}>
        <Text style={styles.cartelInfoTitulo}>Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.</Text>
        <Text style={styles.cartelInfoTexto}>Si no puedes cuidarlo hoy, mañana y siempre; no lo adoptes.</Text>
        <Image style={[styles.cartelRefugio]} source={require('../../assets/images/cartelRefugio.png')}/>
      </View>
      <Text>Refugio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRefugio:{
    minHeight: '100%',
    minWidth: '100%',
    backgroundColor: "white",
  },
  zonaBuscador: {
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
    marginLeft: 20,
    width: "90%",
    height: "21%",
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    borderRadius: 10,
  },
  cartelInfoTitulo:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  cartelInfoTexto:{
    color: "white",
    fontSize: 17,
    marginTop: 10,
    marginLeft: 10,
  },
  cartelRefugio:{
    width: "100%",
    height: "30%",
    marginTop: 5,
    resizeMode: "contain",
  },
});
