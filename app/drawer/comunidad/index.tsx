import { posts } from "@/data/posts.data";
import { FlatList, Text, View, Image, Pressable } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Boton } from "@/src/components/Boton";
import Toast from 'react-native-toast-message';
import React from "react";

interface CustomToastProps {
  title: string;
  message: string;
}

export default function Index() {

  const mostrarCustomToast = () => {
    Toast.show({
      type: "customToast",
      props: {
        title: "¡Nuevo post!",
        message: "Para enviar un post, revisa tu correo.",
        
      },
      position: "bottom",
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

  return (
    <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
        <View style={GlobalStyles.containerComunidad}>
                
        <View style={GlobalStyles.cartel}>
          <Image source={require('../../../assets/images/iconoCartel.png')} style={GlobalStyles.iconoCartel} />
          <Text style={GlobalStyles.tituloCartel}>PATITAS EN MARCHA (eventos)</Text>
          <Text style={GlobalStyles.textoCartel}>
            Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 🐾 Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!
          </Text>
        </View>
        <Text style={[GlobalStyles.textoSeccion, GlobalStyles.marginLeft20]}>Temas de discusión</Text>

      </View>
      }
      renderItem={({ item }) => {
        return (
          <View style={GlobalStyles.itemPosts}>
            <Text style={GlobalStyles.tituloPost}>{item.titulo}</Text>
            <Text style={GlobalStyles.comentarioPeli}>{item.comentarios}</Text>
            <Image source={require('../../../assets/images/bocadillo.png')} style={GlobalStyles.bocadillo} />
          </View>
        );
      }}
      contentContainerStyle={GlobalStyles.flatListContent}
      ListFooterComponent={
        <View>
          <Boton
            onPress={mostrarCustomToast}
            style={GlobalStyles.botonComunidad}
            textStyle={GlobalStyles.textoBotonComunidad}
          >
            Nuevo
          </Boton>
          <Toast config={toastConfig} />
        </View>
      }
    />
  );
}