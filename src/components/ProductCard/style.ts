import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {flex: 1},
  image: {
   // backgroundColor: 'red',
    //position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '10%',
    height: '30%',
    width: '50%',
  },
  title: {
   // backgroundColor: 'red',
    position: 'absolute',
    //alignSelf: 'center',
    left: '10%',
    top: '40%',
    width: '80%',
  },
  off: {
    flexDirection: 'row',
    backgroundColor: 'green',
    position: 'absolute',
    bottom: '27%',
    borderRadius: 10,
    width: '30%',
    left: '10%',
    padding: '7%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
   // backgroundColor: 'red',
    position: 'absolute',
    bottom: '15%',
    //justifyContent: 'space-between',
    alignItems: 'center',
    left: '10%',
    width: '70%',
  },
  mainPrice: {
   // backgroundColor: 'red',
    position: 'absolute',
    bottom: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    left: '10%',
    width: '45%',
  },
});
