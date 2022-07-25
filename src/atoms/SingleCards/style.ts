import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
  },
  detail: {
    position: 'absolute',
    top: '40%',
    left: '8%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'red',
    height: 40,
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
