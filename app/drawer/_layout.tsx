import { Colores } from '@/src/theme/Colores';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import CustomDrawer from '@/src/components/CustomDrawer';
import { GlobalStyles } from '@/src/theme/GlobalStyles';
import { Tamanos } from '@/src/theme/Tamanos';

SplashScreen.preventAutoHideAsync();

export default function DrawerLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    WendyOne: require('../../assets/fonts/WendyOne.ttf'),
    Roboto: require('../../assets/fonts/Roboto.ttf'),
    Roboto2: require('../../assets/fonts/Roboto2.ttf'),
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
          <Image
            source={require('../../assets/images/logoPetConnect.png')}
            style={GlobalStyles.imagenStack}
          />
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
        name="comunidad/index"
        options={{
          drawerLabel: 'Comunidad',
          title: 'COMUNIDAD',
          drawerIcon: ({ size, color }) => <Ionicons name="chatbox-ellipses" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="refugio/index"
        options={{
          drawerLabel: 'Refugio',
          title: 'REFUGIO',
          drawerIcon: ({ size, color }) => <Ionicons name="paw" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="rescate/index"
        options={{
          drawerLabel: 'Rescate',
          title: 'RESCATE',
          drawerIcon: ({ size, color }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="perros/index"
        options={{
          drawerLabel: 'Perros',
          title: 'PERROS',
          drawerIcon: ({ size, color }) => <Ionicons name="information-circle" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
