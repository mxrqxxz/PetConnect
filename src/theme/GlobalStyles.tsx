import { StyleSheet } from 'react-native';
import { Colores } from './Colores';
import { Tamanos } from './Tamanos';

export const GlobalStyles = StyleSheet.create({
    container: {
        backgroundColor: Colores.colorFondo,
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
    zonaPerfl:{
        flexDirection: 'row',
        gap: 15,
        margin: 25,
    },
    textoNormal: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoChico,
        color: Colores.colorTextoNormal,
    },
    textoNegroNormal: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoChico,
        color: Colores.textoNegro,
    },
    textoNegroMediano: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoMediano,
        color: Colores.textoNegro,
    },
    textoNegrita: {
        fontWeight: 'bold',
    },
    textoSubrayado: {
        textDecorationLine: 'underline',
    },
    centradoVertical: {
        justifyContent: 'center',
    }
    
});
