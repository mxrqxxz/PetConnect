import { Text, View, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { ZonaPerfil } from "@/src/components/ZonaPerfil";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
        <ZonaPerfil/>
    </View>

  );
}
