import { posts } from "@/data/posts.data";
import { FlatList, Text, View, StyleSheet, Image, Pressable} from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";


export default function Index() {
  return (
    <View style={styles.containerComunidad}>
      <View style={styles.cartel}>
        <Image source={require('../../assets/images/iconoCartel.png')} style={styles.iconoCartel}/>
        <Text style={styles.tituloCartel}>PATITAS EN MARCHA (eventos)</Text>
        <Text style={styles.textoCartel}>Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 🐾 Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!</Text>
      </View>
      <Text style={styles.tituloTemas}>Temas de discusión</Text>
      
      <FlatList data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
              <View style={styles.itemPosts}>
                  <Text style={styles.tituloPost}>{item.titulo}</Text>
                  <Text style={styles.comentarioPeli}>{item.comentarios}</Text>
                  <Image source={require('../../assets/images/bocadillo.png')} style={styles.bocadillo}/>
              </View>
          );
        }}>
              
      </FlatList>
      <Pressable style={styles.botonComunidad}>
        <Text style={styles.textoBotonComunidad}>Nuevo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerComunidad:{
    minHeight: '100%',
    minWidth: '100%',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: "white",
  },
  iconoCartel:{
    width: 40,
    height: 40,
  },
  tituloCartel:{
    color: "#194A6E",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: -35,
    marginLeft: 50,
  },
  textoCartel:{
    fontSize: 16,
    marginLeft: 0,
    marginTop: 15,
    marginBottom: 20,
  },
  cartel:{
    width: "90%",
    backgroundColor: "#FDB672",
    minHeight: 60,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  tituloTemas:{
    color: "#194A6E",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: -20,
  },
  itemPosts: {
    width: "90%",
    backgroundColor: "#A6C6D7",
    height: 90,
    flex: 1,
    padding: 15,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 10,
  },  

  tituloPost: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#194A6E",
  },
  comentarioPeli: {
    fontSize: 19,
    marginRight: 10,
    marginTop: -20,
    textAlign: "right",
  },
  bocadillo: {
    width: 27,
    height: 27,
    top: -25,
    left: "80%",
  },
  botonComunidad:{
    width: "27%",
    height: "7%",
    borderRadius: 30,
    backgroundColor: "rgba(54, 98, 136, 0.84)",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -120,
    marginBottom: 20,
  },
  textoBotonComunidad:{
    textAlign: "center",
    marginTop: 13,
    color: "white",
    fontSize: 20,
  }

});
