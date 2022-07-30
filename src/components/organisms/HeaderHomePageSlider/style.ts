import { Dimensions, StyleSheet } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.9;

export const styles = StyleSheet.create({
  main: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: ITEM_WIDTH - 10,
    height: 260,
    flexDirection: 'row',
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#36c1de',
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
  cardImage: {
    width: SLIDER_WIDTH - 20,
    height: 260,
    alignSelf: 'center',
    // backgroundColor: 'red',
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal:5,

    backgroundColor:'#36c1de'
  },
  // txtTop: {
  //   color: '#000',
  //   fontSize: 18,
  // },
  // txtBottom: {
  //   color: '#000',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  image: {
    alignSelf:'center',
    width: SLIDER_WIDTH-10,
    height: 250,
    resizeMode: 'contain',
  },
  // button: {
  //   backgroundColor: 'red',
  //   width: 110,
  //   height: 40,
  //   borderRadius: 20,
  //   alignSelf: 'flex-end',
  // },
  // txtButton: {
  //   fontSize: 18,
  //   fontWeight: '500',
  // },
  // description: {
  //   paddingRight: 10,
  // },
  // contentScroll: {
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  // },
});
