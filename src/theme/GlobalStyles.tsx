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
        marginRight: 15,
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
        margin: 25,
        marginTop: 15,
    },
    textoNormal: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoChico,
        color: Colores.textoNormal,
    },
    textoNegroNormal: {
        fontFamily: 'Roboto2',
        fontSize: Tamanos.textoNotificaciones,
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
        marginHorizontal: 25,
        marginTop: 5,
        marginBottom: -10,
    },
    textoPerfil: {
        color: Colores.textoBlanco,
        fontSize: Tamanos.textoMediano,
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
        marginTop: -15,
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
        width: 40,
        height: 40,
    },
    enLinea: {
        flexDirection: 'row',
    },
    seccion: {
        flexDirection: 'row',
        marginHorizontal: 35,
        padding: 10,
        gap: 10,
        justifyContent: "center",  
        alignItems: "center",      
    },
    seccionCuadro: {
        backgroundColor: Colores.stackBar,
        padding: 15,
        alignSelf: "center",       
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 5,
    },
    imagenSeccion:{
        width: Tamanos.anchoFotoSeccion,
        height: Tamanos.alturaFotoSeccion,
    },
    footer: {
        backgroundColor: Colores.stackBar,
        padding: 20,
        alignItems: 'center',
    },
    centrar: {
        textAlign: 'center',
    },
    imagenFooter: {
        width: Tamanos.anchoFoto,
        height: Tamanos.alturaFoto,
        margin: 0,
        marginLeft: 20,
    },
    drawerUserContainer: {
        backgroundColor: "#FDB672",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0,
        marginBottom: 30,
        height: 200,
        borderRadius: 10,

    },
    drawerUserImg: {
        width: 100, 
        height: 100, 
        alignSelf:'center', 
        borderRadius: 50
    },
    
});
