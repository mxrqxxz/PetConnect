import { Text, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Link, useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  const redirigirRegistro = () => {
    router.push('/registro');
  }

  const redirigirInicio = () => {
    router.push('/drawer');
  }

  return (
    <View style={GlobalStyles.containerLogin}>
      <View style={GlobalStyles.cabezeraLoginRegistro}>
        <Image
          source={require('@/assets/images/logoPetConnect.png')}
          style={GlobalStyles.imagenLogin}
        />
      </View>

      <Text style={GlobalStyles.textoLoginSubTitulo}>Bienvenido a</Text>
      <Text style={GlobalStyles.textoLoginTitulo}>PetConnect</Text>
      <View style={GlobalStyles.cuadroLogin}>
        <Image
          source={require('@/assets/images/GatoPerro.png')}
          style={GlobalStyles.imagenLoginGrande}
        />
        <Image
          source={require('@/assets/images/huellaNaranja.png')}
          style={GlobalStyles.imagenPata}
        />
        <Text style={[GlobalStyles.textoAzulGrandeRoboto, GlobalStyles.textoNegrita]}>Accede al refugio</Text>
        <Image
          source={require('@/assets/images/huellaNaranjaDerecha.png')}
          style={GlobalStyles.imagenPataDerecha}
        />
        <View style={GlobalStyles.inputLogin}>
          <Text style={GlobalStyles.inputLoginTexto}>Email</Text>
        </View>
        <View style={GlobalStyles.inputLogin}>
          <Text style={GlobalStyles.inputLoginTexto}>Contraseña</Text>
        </View>
        <View style={GlobalStyles.enLinea}>
          <Pressable style={GlobalStyles.botonAcceder}>
            <Text style={GlobalStyles.textoBotonAcceder} onPress={redirigirInicio}>Acceder</Text>
          </Pressable>
          <Pressable style={GlobalStyles.centradoVertical} onPress={redirigirRegistro}>
            <Text style={GlobalStyles.enlaceAcceso}>o Registrate</Text>
          </Pressable>
        </View>
      </View>
      <Text style={GlobalStyles.enlaceAccesoBlanco}>¿Olvidaste la contraseña?</Text>

    </View>
  );
}
