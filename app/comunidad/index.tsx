import { Text, View } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titulo}>Comunidad</Text>
    </View>
  );
}
