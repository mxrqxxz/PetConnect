
import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { perros } from "@/data/perros.data";
import { Link } from "expo-router";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { Buscador } from "@/src/components/Buscador";

export default function Index() {

  interface Perro {
    id: string;
    nombre: string;
    info: string;
    foto: any;
    ciudad: string;
    sexo: string;
    edad: string;
    Tipo: string;
    encargada: string;
    protectora: string;
    fotoEncargada: any;
    descripcion: string;
    favorito: boolean;
  }
  // Estado para manejar la lista de perros
  const [perrosLista, setPerrosLista] = useState<Perro[]>(perros);

  // Función para manejar el toggle del favorito
  const toggleFavorito = (id: string) => {
    setPerrosLista((prevPerros) =>
      prevPerros.map((perro) =>
        perro.id === id ? { ...perro, favorito: !perro.favorito } : perro
      )
    );
  };

  return (
    <FlatList
      data={perrosLista}
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
          <TouchableOpacity style={GlobalStyles.botonFavoritoPerro} onPress={() => toggleFavorito(item.id)}>
            <Image source={item.favorito ? require("../../../assets/images/favActivo.png") : require("../../../assets/images/favorito.png")} style={GlobalStyles.favorito} />
          </TouchableOpacity>
          <Text style={GlobalStyles.nombrePerro}>{item.nombre}</Text>
          <Text style={GlobalStyles.infoPerro}>{item.info}</Text>
          <Link style={[GlobalStyles.infoPerro, GlobalStyles.detallesPerro]} href={`../../perros/${item.id}`}>Ver detalle</Link>
        </View>
      )}
      contentContainerStyle={GlobalStyles.seccionPerros}
    />
  );
}

