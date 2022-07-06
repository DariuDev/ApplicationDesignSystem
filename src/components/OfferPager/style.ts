import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginEnd: 25,
    position: 'absolute',
    bottom: 0,
    height: '20%',
    zIndex: 3,
  },
  gradient: {
    width: '100%',
    height: 170,
    marginTop: -100,
    bottom: 0,
    zIndex: 2,
  },
  offerTitle: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 4,
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
