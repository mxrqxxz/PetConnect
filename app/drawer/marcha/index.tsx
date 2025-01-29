import { Text, View } from "react-native";
import { GlobalStyles } from "@/src/theme/GlobalStyles";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function Index() {
  const router = useRouter();
  useFocusEffect(
    useCallback(() => {
      router.replace("/drawer");
    }, [])
  );
  return (
    <View style={GlobalStyles.container}>
      <Text>Patitas en marcha</Text>
    </View>
  );
}
