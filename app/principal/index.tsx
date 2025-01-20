import { Text, View, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
        <View>
          <Image source={require('../../assets/images/fotoperfil.png')} style={GlobalStyles.imagenPerfil}/>
        </View>
    </View>


  );
}
