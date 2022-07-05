import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        backgroundColor: '#fff',
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
    image: {
        width: 120,
        height: 150,
        resizeMode: 'contain',
    },
 

});