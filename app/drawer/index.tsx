import { Text, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { ZonaPerfil } from "@/src/components/ZonaPerfil";
import { Notificaciones } from "@/src/components/Notificaciones";
import { Secciones } from "@/src/components/Secciones";

export default function Index() {
  return (
    <ScrollView>
      <View style={GlobalStyles.container}>
        <ZonaPerfil />
        <Notificaciones />
        <Text style={GlobalStyles.textoAzulGrande}>Secciones</Text>
        <Secciones />

        <View style={GlobalStyles.footer}>
          <Text style={[GlobalStyles.textoNotificacionesTitulo, GlobalStyles.centrar]}>Protectoras en colaboración</Text>
          <View style={GlobalStyles.enLinea}>
            <Image source={require('@/assets/images/protectora1.png')} style={GlobalStyles.imagenFooter} />
            <Image source={require('@/assets/images/protectora2.png')} style={GlobalStyles.imagenFooter} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
