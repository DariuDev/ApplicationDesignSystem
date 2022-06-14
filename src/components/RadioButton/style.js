import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    flexDirection: 'row',
        alignItems: 'center'
  },
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      },
      unselected: {
        backgroundColor: 'red',
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      selected: {
        backgroundColor: 'blue',
        margin: 6,
        borderRadius: 30 / 2,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title:{
        justifyContent: 'center',
        alignItems: 'center'
      }
})