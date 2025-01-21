import { Text, View } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View >
      <Text style={{fontFamily: "WendyOne"}}>Login</Text>
      <Link style={GlobalStyles.lista} href="/drawer">INICIO</Link>
      <Link style={GlobalStyles.lista} href="/registro">REGISTRO</Link>
      <Link style={GlobalStyles.lista} href="/drawer/comunidad">COMUNIDAD</Link>
      <Link style={GlobalStyles.lista} href="/drawer/refugio">REFUGIO</Link>
      <Link style={GlobalStyles.lista} href="/drawer/rescate">RESCATE</Link>
      <Link style={GlobalStyles.lista} href="/drawer/perros">PERROS</Link>
    </View>
  );
}
