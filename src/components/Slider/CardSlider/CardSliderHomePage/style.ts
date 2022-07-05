import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        width: 350,
        height: 250,
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 9,
        backgroundColor: '#36c1de',
        borderRadius: 8,
        shadowColor: "#9ba0aa",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    txtTop: {
        color: '#000',
        fontSize: 18,
    },
    txtBottom: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: "red",
        width: 110,
        height: 40,
        borderRadius: 20,
        alignSelf: 'flex-end'
    },
    txtButton: {
        fontSize: 18,
        fontWeight: "500",
    },
    description: {
        marginRight: 20
    }

});