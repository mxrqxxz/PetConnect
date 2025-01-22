import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { useRouter } from "expo-router";
import { Boton } from "@/src/components/Boton";
import { useState } from "react";
import { TextInput } from 'react-native';

export default function Index() {

    const router = useRouter();
  
    const redirigirLogin = () => {
      router.push('/');
    }

    const [nombre, setNombre] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [contraseña, setContraseña] = useState('');
    const [repetirContraseña, setRepetirContraseña] = useState('');
 

  return (
    <View style={GlobalStyles.containerRegistro}>
      <Image source={require("@/assets/images/logoPetConnect.png")} style={GlobalStyles.logo} />
      <Text style={[GlobalStyles.bienvenida, GlobalStyles.azulTextoMediano, GlobalStyles.marginAuto]}>Registrate en</Text>
      <Text style={[GlobalStyles.titulo, GlobalStyles.marginAuto]}>PetConnect</Text>
      <View style={GlobalStyles.animales}>
        <Image source={require("@/assets/images/perrito.png")} style={GlobalStyles.perrito} />
        <Image source={require("@/assets/images/gatito.png")} style={GlobalStyles.gatito} />
      </View>
      <View style={GlobalStyles.contenedor}>
      <Image source={require("@/assets/images/huellaBlanca.png")} style={[GlobalStyles.huella, GlobalStyles.huellaCompartido]} />
      <Text style={GlobalStyles.slogan}>¡Hazte parte del refugio!</Text>
        <Image source={require("@/assets/images/huellaBlanca.png")} style={[GlobalStyles.huella2, GlobalStyles.huellaCompartido]} />
        <View style={GlobalStyles.cuadro}>
          <TextInput
            style={[GlobalStyles.marginLeft20, GlobalStyles.azulTextoMediano]}
            placeholder="Nombre"
            value={nombre}
            onChangeText={(newText) => setNombre(newText)}
          />
        </View>
        <View style={GlobalStyles.cuadro}>
          <TextInput
            style={[GlobalStyles.marginLeft20, GlobalStyles.azulTextoMediano]}
            placeholder="Email"
            value={email}
            onChangeText={(newText) => setEmail(newText)}
          />
        </View>
        <View style={GlobalStyles.cuadro}>
          <TextInput
            style={[GlobalStyles.marginLeft20, GlobalStyles.azulTextoMediano]}
            placeholder="Contraseña"
            value={contraseña}
            onChangeText={(newText) => setContraseña(newText)}
          />
        </View>
        <View style={GlobalStyles.cuadro}>
          <TextInput
            style={[GlobalStyles.marginLeft20, GlobalStyles.azulTextoMediano]}
            placeholder="Repetir contraseña"
            value={repetirContraseña}
            onChangeText={(newText) => setRepetirContraseña(newText)}
          />
        </View>
        <Boton 
          style={GlobalStyles.botonRegistro}
          textStyle={GlobalStyles.textoBotonRegistro} onPress={redirigirLogin}
      >
          Registrate
      </Boton>
       
      </View>
      <View style={[GlobalStyles.login, GlobalStyles.marginAuto]}>
        <Text style={GlobalStyles.pregunta}>Tienes ya una cuenta?</Text>
        <Text style={[GlobalStyles.negritaSubrayado, GlobalStyles.pregunta]} onPress={redirigirLogin}>Accede al refugio</Text>
      </View>
    </View>
  );
}