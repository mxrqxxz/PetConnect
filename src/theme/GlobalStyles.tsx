import { StyleSheet } from 'react-native';
import { Colores } from './Colores';
import { Tamanos } from './Tamanos';

export const GlobalStyles = StyleSheet.create({
    container: {
        minHeight: '100%',
        flex: 1,
        flexDirection: 'column',
        gap: 20,
    },
    imagenStack: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    lista: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: Colores.colorBordePreview,
        borderWidth: 3,
        backgroundColor: Colores.colorFondoTarjeta,
        fontWeight: "bold"
    },
    imagenPerfil: {
        width: Tamanos.anchoFoto,
        height: Tamanos.alturaFoto,
        borderRadius: 10,
    },
    
});
