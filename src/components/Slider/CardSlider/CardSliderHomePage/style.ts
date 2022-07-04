
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
    width: 330,
    height: 250,
    // paddingHorizontal: wp('1%'),
    // paddingTop: 6,
    // paddingBottom: 45,
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center',
    // marginLeft: 4,
    backgroundColor: '#36c1de',
    borderRadius: 5,
    shadowColor: "#9ba0aa",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
},
description: {
    color: '#000',
    fontSize: 18,
 
},
title: {
    color: '#000',
    fontSize: 24,
    fontWeight:'bold'
 
},
imageLastAnalys: {
    width: '19%',
    height: '14%',
    alignSelf: 'center',
    marginTop:6,
    resizeMode: 'contain'
},
viewTopRowLastAnalys: {
    alignItems: 'center',
    width:'35%',
    justifyContent: 'space-between',
    flexDirection: 'row',
},
viewCircleLastAnalys: {
    width:50,
    height:50,
    borderRadius: (50 + 50)/ 2,
    backgroundColor: "#8DC8D7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
},
cardImageLastAnalys: {
    justifyContent: 'center',
    height: '15%',
    width: '15%',
    backgroundColor: '#5668E8',
    borderRadius: 7,
    paddingLeft:8,
    paddingBottom: 9
},
cardTitleLastAnalys: {
    marginTop: 30,
    width: 88,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#5668E8',
    borderRadius: 7,
    height: 20
},
txtnumberLastAnalys: {
    color: '#fff',
    padding: 20,
    fontSize: 24,
    fontFamily: 'BYekan',
},
viewTopRowLastAnalysInSkeleton: {
    flexDirection: "row",
    justifyContent: "space-between",
},
});