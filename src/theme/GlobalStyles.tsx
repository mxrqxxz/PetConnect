import { StyleSheet } from 'react-native';
import { Colores } from './Colores';
import { Tamanos } from './Tamanos';

export const GlobalStyles = StyleSheet.create({
    container: {
        backgroundColor: Colores.colorFondo,
        minHeight: '100%',
        flex: 1,
        flexDirection: 'column',
        gap: 10,
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
    zonaPerfil:{
        flexDirection: 'row',
        gap: 15,
        margin: 25
    },
    textoNormal: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoChico,
        color: Colores.textoNormal,
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
    textoAzulGrande: {
        fontFamily: 'WendyOne',
        fontSize: Tamanos.textoGrande,
        color: Colores.textoNormal,
        margin: 25,
    },
    textoNegrita: {
        fontWeight: 'bold',
    },
    textoSubrayado: {
        textDecorationLine: 'underline',
    },
    centradoVertical: {
        justifyContent: 'center',
    },
    notificacionCuadro:{
        backgroundColor: Colores.naranja,
        paddingTop: 15,
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 25,
    },
    notificacionCuadroTitulo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fotoNotificacionFlecha: {
        width: 20,
        height: 11,
        marginRight: 20,
        marginTop: 5,
    },
    notificacion: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        gap: 20,
        padding: 10,
    },
    textoNotificacionesTitulo:{
        flexShrink: 1, // se hace un poco más pequeño para que quepa la flecha
        fontFamily: "WendyOne",
        fontSize: Tamanos.textoMediano,
        color: Colores.textoBlanco,
        marginLeft: 10,
        paddingBottom: 15,
    },
    fotoNotificacion: {
        width: 30,
        height: 30,
    },
    enLinea: {
        flexDirection: 'row',
    },
    seccion:{
        marginHorizontal: 35,
        borderWidth: 1,
    },
    seccionCuadro: {
        backgroundColor: Colores.stackBar,
        padding: 15,
        alignSelf: "flex-start",
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 5,
    },
    imagenSeccion:{
        width: Tamanos.anchoFotoSeccion,
        height: Tamanos.alturaFotoSeccion,
    }
    
});
