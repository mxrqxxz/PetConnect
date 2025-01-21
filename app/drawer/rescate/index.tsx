import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import * as React from "react";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

export default function Index() {
  return (
    <View style={styles.containerMapa}>
      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: 37.6057928,
          longitude: -0.992766,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>Puto mapa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  containerMapa: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 
