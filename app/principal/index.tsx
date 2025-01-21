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
          <View>
            <View style={GlobalStyles.seccionCuadro}>
              <Image source={require('../../assets/images/huella.png')} style={GlobalStyles.imagenSeccion} />
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Patitas al rescate</Text>
          </View>
          <View>
            <View style={GlobalStyles.seccionCuadro}>
              <Image source={require('../../assets/images/patasenmarcha.png')} style={GlobalStyles.imagenSeccion} />
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Patas en marcha</Text>
          </View>
          <View>
            <View style={GlobalStyles.seccionCuadro}>
              <Image source={require('../../assets/images/refugiodepatitas.png')} style={GlobalStyles.imagenSeccion} />	
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Refugio de patitas</Text>
          </View>
        </View>
        <View style={GlobalStyles.seccion}>
          <View>
            <View style={GlobalStyles.seccionCuadro}>
              <Image source={require('../../assets/images/comunidadanimal.png')} style={GlobalStyles.imagenSeccion} />
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Comunidad animal</Text>
          </View>
          <View>
            <View style={GlobalStyles.seccionCuadro}>
              <Image source={require('../../assets/images/sobre.png')} style={GlobalStyles.imagenSeccion} />	
            </View>
            <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>Sobre Petconnect</Text>
          </View>
        </View>
      </View>

    </View>

  );
}
