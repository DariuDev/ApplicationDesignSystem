import { Dimensions, StyleSheet } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: 260,
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#36c1de',
        //marginHorizontal:15,
        borderRadius: 8,
        shadowColor: "#9ba0aa",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 3,
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
        width: 137,
        height: 190,
        resizeMode: 'contain'
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
        paddingRight: 10
    }

});