import { Text, View } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View >
      <Text style={{fontFamily: "WendyOne"}}>Login</Text>
      <Link style={GlobalStyles.lista} href="/principal">INICIO</Link>
      <Link style={GlobalStyles.lista} href="/registro">REGISTRO</Link>
      <Link style={GlobalStyles.lista} href="/comunidad">COMUNIDAD</Link>
      <Link style={GlobalStyles.lista} href="/refugio">REFUGIO</Link>
      <Link style={GlobalStyles.lista} href="/rescate">RESCATE</Link>
      <Link style={GlobalStyles.lista} href="/perros">PERROS</Link>
    </View>
  );
}
