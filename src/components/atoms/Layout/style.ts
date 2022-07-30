import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    layout: {
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        // width:'100%',
        // marginHorizontal: 17,
        // marginVertical: 10,
    },
    rowCloumn: {
        // height: 120,
         alignItems: "stretch",
        justifyContent: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
    }
})
export { styles };