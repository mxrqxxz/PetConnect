import { Text, View, PressableProps, StyleProp, TextStyle, ViewStyle, Image, ImageStyle } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from "react";
import { GlobalStyles } from "@/src/theme/GlobalStyles";

interface Props extends PressableProps {
    stylezona?: StyleProp<ViewStyle>;
    stylebuscador2?: StyleProp<ViewStyle>;
    stylebuscador1?: StyleProp<ViewStyle>;
    styleTextoBuscador?: StyleProp<TextStyle>;
    azulTextoMediano?: StyleProp<TextStyle>;
    buscadorPequeñoRescate?: StyleProp<ViewStyle>;
    iconoBuscadorRescate?: StyleProp<ImageStyle>;
}

export const Buscador = ({ iconoBuscadorRescate, buscadorPequeñoRescate, stylezona, stylebuscador2 ,stylebuscador1,styleTextoBuscador, azulTextoMediano, ...rest }: Props) => {
    
    const [text, setText] = useState(''); 

    return (
        <View style={stylezona}>
            <View style={[stylebuscador1, stylebuscador2]}>
                <TextInput
                style={[styleTextoBuscador, azulTextoMediano]}
                placeholder="Buscar..."
                value={text}
                onChangeText={(newText) => setText(newText)}
                />
            </View>
            <View style={buscadorPequeñoRescate}>
            <Image
                style={iconoBuscadorRescate}
                source={require("../../assets/images/iconoBuscador.png")}/>
            </View>
        </View>
        
    );
};
