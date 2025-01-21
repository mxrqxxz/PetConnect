import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { useRouter } from "expo-router";

export default function Index() {

    const router = useRouter();
  
    const redirigirLogin = () => {
      router.push('/');
    }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/logoPetConnect.png")} style={styles.logo} />
      <Text style={styles.bienvenida}>Registrate en</Text>
      <Text style={styles.titulo}>PetConnect</Text>
      <View style={styles.animales}>
        <Image source={require("@/assets/images/perrito.png")} style={styles.perrito} />
        <Image source={require("@/assets/images/gatito.png")} style={styles.gatito} />
      </View>
      <View style={styles.contenedor}>
        <Image source={require("@/assets/images/huellaBlanca.png")} style={styles.huella} />
        <Text style={styles.slogan}>¡Hazte parte del refugio!</Text>
        <Image source={require("@/assets/images/huellaBlanca.png")} style={styles.huella2} />
        <View style={styles.cuadro}>
          <Text style={styles.textoCuadro}>Nombre</Text>
        </View>
        <View style={styles.cuadro}>
          <Text style={styles.textoCuadro}>Email</Text>
        </View>
        <View style={styles.cuadro}>
          <Text style={styles.textoCuadro}>Contraseña</Text>
        </View>
        <View style={styles.cuadro}>
          <Text style={styles.textoCuadro}>Repetir contraseña</Text>
        </View>
        <Pressable style={styles.botonRegistro}>
          <Text style={styles.textoBotonRegistro} onPress={redirigirLogin}>Registrate</Text>
        </Pressable>
      </View>
      <View style={styles.login}>
        <Text style={styles.pregunta}>Tienes ya una cuenta?</Text>
        <Text style={styles.acceder} onPress={redirigirLogin}>Accede al refugio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 15,
    marginBottom: 0,
    marginLeft: "auto",
  },
  bienvenida: {
    fontSize: 20,
    color: "rgba(54, 98, 136, 0.84)",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  titulo: {
    fontSize: 40,
    color: "rgba(54, 98, 136, 0.84)",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  animales:{
    flexDirection: "row",
  },
  perrito:{
    width: 150,
    height: 110,
    position: "absolute",
    top: 20,
    left: 90,
  },
  gatito:{
    width: 130,
    height: 110,
    position: "absolute",
    top: 20,
    left: 180,
  },
  contenedor: {
    alignItems: "center",
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    padding: 20,
    marginTop: 130,
    width: "100%",
    height: "60%",
    borderRadius: 40,
  },
  slogan:{
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: -15,
  },
  huella:{
    width: 55,
    height: 55,
    marginRight: "auto",
  },
  huella2:{
    width: 55,
    height: 55,
    marginLeft: "auto",
    transform: [{ rotate: "50deg" }],
    marginBottom: -20,
    marginTop: -10,
  },
  cuadro:{
    backgroundColor: "#FDB672",
    width: "100%",
    height: 50,
    borderRadius: 25,
    textAlign: "left",
    justifyContent: "center",
    marginTop: 20,
  },  
  textoCuadro:{
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 20,
    marginLeft: 20,
  },
  textoBotonRegistro:{
    textAlign: "center",
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 18,
    fontWeight: "bold",
  },
  botonRegistro:{
    width: "45%",
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: "auto",
    marginTop: 30,
  },
  login:{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
  pregunta:{
    color: "rgba(54, 98, 136, 0.84)",
    fontSize: 17,
  },
  acceder:{
    color: "rgba(54, 98, 136, 0.84)", 
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "underline",
  }

}); 
