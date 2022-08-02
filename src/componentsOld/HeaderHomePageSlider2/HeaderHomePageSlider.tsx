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
import { BrandCard } from '../../components/molecules';

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

  const [array, setArray] = useState(data);

  const addDataArray = () => {
    setArray((old: any) => [...old, ...array]);
  };
  const moveValue = () => {
    //console.log('start');
    Animated.loop(
      Animated.sequence([
        Animated.timing(leftValue, {

          toValue: 50000,
          duration: 200000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    // setTimeout(cycleLoop, 10000);
    console.log('end');
    //problem is for 5 items and card in size should is custom forxample formole :)
  };
  useEffect(() => {
    moveValue();
    const cycleLoop = () => {
      console.log('start');
      addDataArray();

      setTimeout(cycleLoop, 20000);

      console.log('end');
    };
    cycleLoop();
  }, []);

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
            flex: 1,
            flexDirection: 'row',
            marginRight: leftValue,
            width: '100%',
            backgroundColor: 'red',
          },
        ]}>
        {array.map((item: any, i, array) => {
          // if (i == array.length - 1) setArray((old: any) => [...old, ...array]);
          return (
            <BrandCard image={item.title + i} />
            //         <Card onPress={onPressTitle} key={i}>
            //           <View style={styles.container}>
            //             <View style={styles.description}>
            //               <Text style={styles.txtTop}>{item.description + i}</Text>
            //               <Text style={styles.txtBottom}>{item.title}</Text>
            //               <Button
            //                 title={'کلیک کن'}
            //                 styleButton={styles.button}
            //                 styleText={styles.txtButton}>
            //                 <Icon
            //                   type={MaterialIcons}
            //                   name={'arrow-back-ios'}
            //                   size={14}
            //                   color={'#fff'}
            //                 />
            //               </Button>
            //             </View>
            //             {/* <Image
            //   style={styles.image}
            //   source={require('../../assets/imageSlider.png')}
            // /> */}
            //           </View>
            //         </Card>
          );
        })}
      </Animated.View>
    </View>
  );
};
export default HeaderHomePageSlider;
