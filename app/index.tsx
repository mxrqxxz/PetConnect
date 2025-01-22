import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { useRouter } from "expo-router";
import { Boton } from "@/src/components/Boton";
import { useState } from "react";
import { TextInput } from "react-native";
import Toast from "react-native-toast-message";

interface CustomToastProps {
  title: string;
  message: string;
}

export default function Index() {
  const mostrarCustomToast = () => {
    Toast.show({
      type: "customToast",
      props: {
        title: "¡Recuperar contraseña!",
        message: "Para recuperar tu contraseña, revisa tu correo.",
      },
    });
  };

  const toastConfig = {
    customToast: ({ props }: { props: CustomToastProps }) => (
      <View style={GlobalStyles.customToastContainer}>
        <Text style={GlobalStyles.toastTitle}>{props.title}</Text>
        <Text style={GlobalStyles.toastMessage}>{props.message}</Text>
      </View>
    ),
  };

  const router = useRouter();

  const redirigirRegistro = () => {
    router.push("/registro");
  };

  const redirigirInicio = () => {
    router.push("/drawer");
  };

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <View style={GlobalStyles.containerLogin}>
      <View style={GlobalStyles.cabezeraLoginRegistro}>
        <Image
          source={require("@/assets/images/logoPetConnect.png")}
          style={[GlobalStyles.imagenLogin, GlobalStyles.marginAjuste]}
        />
      </View>

      <Text style={GlobalStyles.textoLoginSubTitulo}>Bienvenido a</Text>
      <Text style={GlobalStyles.textoLoginTitulo}>PetConnect</Text>
      <View style={GlobalStyles.cuadroLogin}>
        <Image
          source={require("@/assets/images/GatoPerro.png")}
          style={GlobalStyles.imagenLoginGrande}
        />
        <Image
          source={require("@/assets/images/huellaNaranja.png")}
          style={GlobalStyles.imagenPata}
        />
        <Text
          style={[
            GlobalStyles.textoAzulGrandeRoboto,
            GlobalStyles.textoNegrita,
          ]}
        >
          Accede al refugio
        </Text>
        <Image
          source={require("@/assets/images/huellaNaranjaDerecha.png")}
          style={GlobalStyles.imagenPataDerecha}
        />
        <View style={GlobalStyles.inputLogin}>
          <TextInput
            style={[GlobalStyles.inputLoginTexto, GlobalStyles.marginLeft20]}
            placeholder="Email"
            value={email}
            onChangeText={(newText) => setEmail(newText)}
          />
        </View>
        <View style={GlobalStyles.inputLogin}>
          <TextInput
            style={[GlobalStyles.inputLoginTexto, GlobalStyles.marginLeft20]}
            placeholder="Contraseña"
            value={contraseña}
            onChangeText={(newText) => setContraseña(newText)}
          />
        </View>

        <View style={GlobalStyles.enLinea}>
          <Boton
            style={GlobalStyles.botonAcceder}
            textStyle={GlobalStyles.textoBotonAcceder}
            onPress={redirigirInicio}
          >
            Acceder
          </Boton>

          <Pressable
            style={GlobalStyles.centradoVertical}
            onPress={redirigirRegistro}
          >
            <Text
              style={[
                GlobalStyles.enlaceAcceso,
                GlobalStyles.negritaSubrayado,
              ]}
            >
              o Registrate
            </Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={GlobalStyles.centradoVertical}
        onPress={mostrarCustomToast}
      >
        <Text
          style={[
            GlobalStyles.enlaceAccesoBlanco,
            GlobalStyles.negritaSubrayado,
          ]}
        >
          ¿Olvidaste la contraseña?
        </Text>
      </Pressable>
      <Toast config={toastConfig} />
    </View>
  );
}

