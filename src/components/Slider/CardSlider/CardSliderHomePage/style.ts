
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
cardItemLastAnalys: {
    width: '40%',
    height: '18%',
    // paddingHorizontal: wp('1%'),
    paddingTop: '2.5%',
    paddingBottom: '1%',
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: '1%',
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
},
titleLastAnalys: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'BYekan'
},
imageLastAnalys: {
    width: '19%',
    height: '14%',
    alignSelf: 'center',
    marginTop: '1.5%',
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
    borderRadius: 50 + 50/ 2,
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
    paddingLeft:'5%',
    paddingBottom: '3%'
},
cardTitleLastAnalys: {
    marginTop: '2.5%',
    width: '35%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#5668E8',
    borderRadius: 7,
    height: '3.7%'
},
txtnumberLastAnalys: {
    color: '#fff',
    padding: '0.5',
    fontSize: 24,
    fontFamily: 'BYekan',
},
viewTopRowLastAnalysInSkeleton: {
    flexDirection: "row",
    justifyContent: "space-between",
},
});