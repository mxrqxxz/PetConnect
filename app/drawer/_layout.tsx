import { Colores } from '@/src/theme/Colores';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native';
import CustomDrawer from '@/src/components/CustomDrawer';
import { GlobalStyles } from '@/src/theme/GlobalStyles';
import { Tamanos } from '@/src/theme/Tamanos';
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function DrawerLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    WendyOne: require('../../assets/fonts/WendyOne.ttf'),
    Roboto: require('../../assets/fonts/Roboto.ttf'),
    Roboto2: require('../../assets/fonts/Roboto2.ttf'),
  });

  const redirigirInicio = () => {
    router.push('/drawer');
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: true,
        drawerInactiveTintColor: 'black',
        drawerActiveBackgroundColor: 'rgba(54, 98, 136, 0.84)',
        drawerActiveTintColor: 'white',
        headerStyle: {
          backgroundColor: Colores.stackBar,
        },
        headerTintColor: Colores.stackBarColorLetra,
        headerTitleStyle: {
          fontFamily: 'WendyOne',
          fontSize: Tamanos.textoTitulo,
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <Pressable onPress={redirigirInicio}>
            <Image
              source={require('../../assets/images/logoPetConnect.png')}
              style={GlobalStyles.imagenLogin} />
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Inicio',
          title: 'INICIO',
          drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="rescate/index"
        options={{
          drawerLabel: 'Patitas al rescate',
          title: 'RESCATE',
          drawerIcon: ({ size, color }) => <Ionicons name="compass" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="marcha/index"
        options={{
          drawerLabel: 'Patas en marcha',
          title: 'PATAS EN MARCHA',
          drawerIcon: ({ size, color }) => <Ionicons name="paw" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="refugio/index"
        options={{
          drawerLabel: 'Refugio de patitas',
          title: 'REFUGIO',
          drawerIcon: ({ size, color }) => <Ionicons name="medkit" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="comunidad/index"
        options={{
          drawerLabel: 'Comunidad animal',
          title: 'COMUNIDAD',
          drawerIcon: ({ size, color }) => <Ionicons name="chatbox-ellipses" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="nosotros/index"
        options={{
          drawerLabel: 'Sobre Petconnect',
          title: 'SOBRE NOSOTROS',
          drawerIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="../../perros/[id]"
        options={{
          drawerLabel: 'Perro',
          title: 'Perro',
          drawerIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
          headerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ejemplo de color de fondo para esta pantalla
          },
          headerTintColor: 'white', // Cambia el color del texto
          headerTitleStyle: {
            fontSize: 24, // Cambia el tamaño del texto
          },
        }}
      />


    </Drawer>
  );
}
