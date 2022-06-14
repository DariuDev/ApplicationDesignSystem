import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      },
      unselected: {
        backgroundColor: 'red',
        margin: 5,
        height: 30,
        width: 30
      },
      selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
        height: 30,
        width: 30
      },
})