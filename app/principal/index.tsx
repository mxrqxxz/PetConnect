import { Text, View, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { ZonaPerfil } from "@/src/components/ZonaPerfil";
import { Notificaciones } from "@/src/components/Notificaciones";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <ZonaPerfil />
      <Notificaciones />
      <Text style={GlobalStyles.textoAzulGrande}>Secciones</Text>

      <View>
        <View style={GlobalStyles.seccion}>
          <View style={GlobalStyles.seccionCuadro}>
            <Image source={require('../../assets/images/huella.png')} style={GlobalStyles.imagenSeccion} />
          </View>
          <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Patitas al rescate</Text>
        </View>
        <View style={GlobalStyles.seccion}>
          <View style={GlobalStyles.seccionCuadro}>
            <Image source={require('../../assets/images/huella.png')} style={GlobalStyles.imagenSeccion} />
          </View>
          <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Patitas al rescate</Text>
        </View>
      </View>

    </View>

  );
}
