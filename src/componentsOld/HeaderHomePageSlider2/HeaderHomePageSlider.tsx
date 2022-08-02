import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { Card, Button, Icon } from '../../atoms';
import { MaterialIcons } from '../../atoms/Icon/type';
import { styles } from './style';
import { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';

const SCREEN_WIDTH = Dimensions.get('window').width;

const delay = 5;
const HeaderHomePageSlider = ({ data, onPressTitle }: IHeaderHomePageSlider) => {
  // const lenght = data.length;
  let counter = 0;
  // const [flag, setFlag] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<object[]>(data);
  // const sliderRef = useRef<any>(null);
  // const [isMounted, setIsMounted] = useState(false);
  const leftValue = useState(new Animated.Value(0))[0];

  const [showdata, setShowData] = useState([])

  const moveValue = () => {
    //   Animated.loop(
    //   Animated.sequence(leftValue, {
    //     toValue: 15000,
    //     duration: 50000,
    //     useNativeDriver: false,
    //   }).start();
    //   ).start();
    // };


    //problem is for 5 items and card in size should is custom forxample formole :)
    Animated.loop(
      Animated.sequence([
        Animated.timing(leftValue, {
          toValue: 3000,
          duration: 5000,
          useNativeDriver: false,
        }),

        // Animated.timing(leftValue, {
        //   toValue: 1,
        //   duration: 5000,
        //   useNativeDriver: false,
        // })
      ])
    ).start();
  }
  useEffect(() => {
    // if (!isMounted) return;
    moveValue();
    // if (n === lenght - 1) {
    //   console.log('fiiiiiinsh')
    // }
    // addEventListener("resize", moveValue);
    // return () => {
    //   removeEventListener("resize", moveValue);
    // };

  }, []);
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);
  // useEffect(() => {
  //   console.log(flag);
  // }, [flag])



  // const [counter1, setCounter1] = useState(1);
  // useEffect(() => {
  //   var da: any = [];
  //   data.forEach(element => {
  //     da.push(element);
  //   });
  //   setShowData(da);
  //   const interval = setInterval(
  //     () => setCounter1(counter + 1),
  //     2000
  //   );
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, [])






  // const setShowDataFn = () => {

  //   const timer = counter > 0 && setTimeout(() => setCounter1(counter + 1), 5000);
  //   var len = data.length;
  //   if (counter > len) {
  //     console.log("here");

  //     setCounter1(1)
  //     var da: any = [];
  //     data.forEach(element => {
  //       da.push(element);
  //     });
  //     setShowData(da);
  //   }
  // }

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          {
            //flex: 1,
            flexDirection: 'row',
            marginRight: leftValue,
            width: '100%',
            //backgroundColor: 'red',
          },
        ]}>

        {data.map((item: any, i, array) => {

          return (
            <Card onPress={onPressTitle} key={i}>
              <View style={styles.container} >
                <View style={styles.description}>
                  <Text style={styles.txtTop}>{item.description + i}</Text>
                  <Text style={styles.txtBottom}>{item.title}</Text>
                  <Button
                    title={'کلیک کن'}
                    styleButton={styles.button}
                    styleText={styles.txtButton}>
                    <Icon
                      type={MaterialIcons}
                      name={'arrow-back-ios'}
                      size={14}
                      color={'#fff'}
                    />
                  </Button>
                </View>
                {/* <Image
                style={styles.image}
                source={require('../../assets/imageSlider.png')}
              /> */}
              </View>
            </Card>
          );
        })}
      </Animated.View>
    </View>
  )
};
export default HeaderHomePageSlider;
