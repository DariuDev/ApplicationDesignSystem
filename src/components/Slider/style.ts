import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    viewRightLeftSlider: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20,
        zIndex: 1,
       
        // top: top,
        position: 'absolute',

    },
    cardCircleSlider: {
        zIndex: 1,
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: (20 +20) / 2,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },

    titleSlider: {
        marginBottom: 5,
        marginTop: 5,
        marginRight: 5,
        color: '#200084',
    },
});
