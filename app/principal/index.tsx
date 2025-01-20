import { Text, View, Image } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { ZonaPerfil } from "@/src/components/ZonaPerfil";

export default function Index() {
  return (
    <View style={GlobalStyles.container}>
        <ZonaPerfil/>

        <View style={GlobalStyles.notificacionCuadro}>
            <View style={GlobalStyles.notificacionCuadroTitulo}>
              <Text style={GlobalStyles.textoNotificacionesTitulo}>Notificaciones +2</Text>
              <Image style={GlobalStyles.fotoNotificacionFlecha} source={require('../../assets/images/flechaAbajo.png')}/>
            </View>
            <View style={GlobalStyles.notificacion}>
              <Image style={GlobalStyles.fotoNotificacion} source={require('../../assets/images/adoptMe.png')}/>
              <View style={[GlobalStyles.centradoVertical, GlobalStyles.enLinea]}>
                <Text style={GlobalStyles.textoNegroNormal}>
                  Nuevo mensaje de:{' '}
                </Text>
                <Text style={[GlobalStyles.textoNegroNormal, GlobalStyles.textoNegrita]}>
                  Protectora Perros Abandona2
                </Text>
              </View>
            </View>
            <View style={GlobalStyles.notificacion}>
              <Image style={GlobalStyles.fotoNotificacion} source={require('../../assets/images/manos.png')}/>
              <View style={[GlobalStyles.centradoVertical, GlobalStyles.enLinea]}>
                <Text style={[GlobalStyles.textoNegroNormal, , GlobalStyles.textoNegrita]}>
                  ToniAnzis{' '}
                </Text>
                <Text style={GlobalStyles.textoNegroNormal}>
                  respondió a su post en el foro
                </Text>
              </View>
            </View>
        </View>
    </View>

  );
}
