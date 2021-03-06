import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    height: '20%',
    zIndex: 3,
  },
  cardList: {
    marginHorizontal: 5,
    flex: 1,
    borderRadius: 15,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    zIndex: 2,
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgXml: {
    alignSelf: 'center',
    zIndex: 3,
  },
});
