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
    peliculaPreview: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: Colores.colorBordePreview,
        borderWidth: 3,
        backgroundColor: Colores.colorFondoTarjeta,
    },
    titulo: {
        fontFamily: 'BebasNeue',
        color: Colores.colorTitulo,
        fontSize: Tamanos.textoMediano,
        fontWeight: Tamanos.weightGrande,
        textAlign: 'center',
        paddingBottom: 10
    },
    enlace: {
        color: Colores.colorEnlace,
        textDecorationLine: 'underline',
        paddingTop: 10,
    },
    fotoPeli: {
        width: Tamanos.anchoFoto,
        height: Tamanos.alturaFoto,
        marginTop: 15,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: Colores.colorBordePreview,
        borderWidth: 2,
    },
    textoDefault: {
        color: Colores.colorTextoPantalla,
        fontSize: Tamanos.textoChico,
        fontFamily: 'RobotoSlab',
    },
    nota: {
        fontFamily: 'BebasNeue',
        fontSize: Tamanos.textoMediano,
        fontWeight: Tamanos.weightGrande,
        textAlign: 'center',
        paddingBottom: 10
    },
    notaBuena: {
        color: Colores.notaBuena,
    },
    notaMedia: {
        color: Colores.notaMedia
    },
    notaMala: {
        color: Colores.notaMala
    },
    boton: {
        backgroundColor: Colores.colorBoton,
        padding: 10,
        borderRadius: 10,
        borderColor: Colores.colorBordeBoton,
        borderWidth: 2,
        textAlign: 'center',
        width: 200,
        alignSelf: 'center',
        marginTop: 10,
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    }
});
