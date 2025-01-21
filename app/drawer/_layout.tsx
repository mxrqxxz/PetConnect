import { Colores } from '@/src/theme/Colores';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Image } from 'react-native';
import { GlobalStyles } from '@/src/theme/GlobalStyles';
import { Tamanos } from '@/src/theme/Tamanos';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/src/components/CustomDrawer';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const LayoutDrawer = () => {
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
                overlayColor: 'rgba(0,0,0,0.4)',
                drawerInactiveTintColor: 'black',
                drawerActiveBackgroundColor: 'indigo',
                drawerActiveTintColor: 'white',
                drawerItemStyle: {
                    borderRadius: 10
                },
                headerStyle: {
                    backgroundColor: Colores.stackBar,
                },
                headerTintColor: Colores.stackBarColorLetra,
                headerTitleStyle: {
                    fontFamily: 'WendyOne',
                    fontSize: Tamanos.textoTitulo
                },
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <Image source={require('../assets/images/logoPetConnect.png')} style={GlobalStyles.imagenStack} />
                    )
                },

            }}>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'Inicio',
                    title: 'INICIO',
                    drawerIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="comunidad/index"
                options={{
                    drawerLabel: 'Comunidad',
                    title: 'COMUNIDAD',
                    drawerIcon: ({ size, color }) => <Ionicons name="film" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="refugio/index"
                options={{
                    drawerLabel: 'REFUGIO',
                    title: 'CONFIGURACION',
                    drawerIcon: ({ size, color }) => <Ionicons name="construct" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="rescate/index"
                options={{
                    drawerLabel: 'Rescate',
                    title: 'RESCATE',
                    drawerIcon: ({ size, color }) => <Ionicons name="construct" size={size} color={color} />
                }}
            />
            <Drawer.Screen
                name="perros/index"
                options={{
                    drawerLabel: 'Perros',
                    title: 'PERROS',
                    drawerIcon: ({ size, color }) => <Ionicons name="construct" size={size} color={color} />
                }}
            />
        </Drawer>
    )
}