import { Colores } from '@/src/theme/Colores';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Image } from 'react-native';
import { GlobalStyles } from '@/src/theme/GlobalStyles';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    WendyOne: require('../assets/fonts/WendyOne.ttf'),
    Roboto: require('../assets/fonts/Roboto.ttf'),
    Roboto2: require('../assets/fonts/Roboto2.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: Colores.stackBar,
      },
      headerTintColor: Colores.stackBarColorLetra,
      headerTitleStyle: {
        fontFamily: 'WendyOne',
      },
      headerTitleAlign: 'center',
      headerRight: () => {
        return (
          <Image source={require('../assets/images/logoPetConnect.png')} style={GlobalStyles.imagenStack}/>
        )
      },
    }}>
    
    <Stack.Screen
      name='index'
      options={{title: 'LOGIN', }}/>
      <Stack.Screen 
      name='registro/index'
      options={{title: 'REGISTRO'}}/>
    <Stack.Screen
      name='inicio/index'
      options={{title: 'INICIO'}}/>
    <Stack.Screen 
      name='comunidad/index'
      options={{title: 'COMUNIDAD'}}/>
      <Stack.Screen 
      name='rescate/index'
      options={{title: 'RESCATE'}}/>
      <Stack.Screen 
      name='refugio/index'
      options={{title: 'REFUGIO'}}/>
      <Stack.Screen 
      name='perros/index'
      options={{title: 'PERROS'}}/>
  </Stack>
  );
}