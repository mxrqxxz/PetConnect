
import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { perros } from "@/data/perros.data";
import { Link } from "expo-router";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Buscador } from "@/src/components/Buscador";

export default function Index() {
  return (
    <FlatList
      data={perros}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListHeaderComponent={
        <View style={GlobalStyles.containerRefugio}>
          <Buscador
            stylezona={GlobalStyles.zonaBuscador}
            stylebuscador1={GlobalStyles.marginLeftTop20}
            stylebuscador2={GlobalStyles.buscador}
            styleTextoBuscador={GlobalStyles.textoBuscador}
            azulTextoMediano={GlobalStyles.azulTextoMediano}
            buscadorPequeñoRescate={GlobalStyles.buscadorPequeño}
            iconoBuscadorRescate={GlobalStyles.iconoBuscador}
            />
          
          <View style={[GlobalStyles.cartelInfo, GlobalStyles.marginLeft20]}>
            <Text style={GlobalStyles.cartelInfoTitulo}>
              Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso.
            </Text>
            <Text style={GlobalStyles.cartelInfoTexto}>
              Si no puedes cuidarlo hoy, mañana y siempre; no lo adoptes.
            </Text>
            <Image
              style={[GlobalStyles.cartelRefugio]}
              source={require("../../../assets/images/cartelRefugio.png")}
            />
          </View>
          <Text style={[GlobalStyles.textoCategorias, GlobalStyles.marginLeftTop20]}>Categorias</Text>
          <Text style={GlobalStyles.textoVerTodo}>Ver todo</Text>
          <View style={GlobalStyles.seccionRefugio}>
            <View>
              <View style={GlobalStyles.seccionCuadroRefugio}>
                <Image
                  source={require("../../../assets/images/gato.png")}
                  style={GlobalStyles.imagenSeccionRefugio}
                />
                <Text style={GlobalStyles.textoFiltroRefugio}>Gatos</Text>
              </View>
            </View>
            <View>
              <View style={GlobalStyles.seccionCuadroRefugio}>
                <Image
                  source={require("../../../assets/images/perro.png")}
                  style={GlobalStyles.imagenSeccionRefugio}
                />
                <Text style={GlobalStyles.textoFiltroRefugio}>Perros</Text>
              </View>
            </View>
            <View>
              <View style={GlobalStyles.seccionCuadroRefugio}>
                <Image
                  source={require("../../../assets/images/conejo.png")}
                  style={GlobalStyles.imagenSeccionRefugio}
                />
                <Text style={GlobalStyles.textoFiltroRefugio}>Conejos</Text>
              </View>
            </View>
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <View style={GlobalStyles.itemPerros}>
          <Image source={item.foto} style={GlobalStyles.imagenPerro} />
          <Image source={require("../../../assets/images/favorito.png")} style={GlobalStyles.favorito}/>          
          <Text style={GlobalStyles.nombrePerro}>{item.nombre}</Text>
          <Text style={GlobalStyles.infoPerro}>{item.info}</Text>
          <Link style={GlobalStyles.infoPerro} href={`../../perros/${item.id}`}>Ver detalle</Link>
        </View>
      )}
      contentContainerStyle={GlobalStyles.seccionPerros}
    />
  );
}

