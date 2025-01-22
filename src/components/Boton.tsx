import { Text, Pressable, PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Toast from 'react-native-toast-message';

interface Props extends PressableProps {
    children: string; 
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>; 
}

export const Boton = ({ children, onPress, style, textStyle, ...rest }: Props) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[style]} 
            {...rest}
        >
            <Text style={[textStyle]}>{children}</Text>
            <Toast />
        </Pressable>
        
    );
};
