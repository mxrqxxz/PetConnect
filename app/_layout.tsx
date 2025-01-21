import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
