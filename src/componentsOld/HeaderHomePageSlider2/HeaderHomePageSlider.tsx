import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {Card, Button, Icon} from '../../atoms';
import {MaterialIcons} from '../../atoms/Icon/type';
import {styles} from './style';
import {IHeaderHomePageSlider} from './HeaderHomePageSlider.type';

const SCREEN_WIDTH = Dimensions.get('window').width;

const delay = 5;
const HeaderHomePageSlider = ({data, onPressTitle}: IHeaderHomePageSlider) => {
  const lenght = data.length;
  const [current, setCurrent] = useState<number>(0);
  const sliderRef = useRef<any>(null);
  const leftValue = useState(new Animated.Value(0))[0];

  const moveValue = () => {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    moveValue();
  });
  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          {
            //flex: 1,
            flexDirection: 'row',
            marginRight: leftValue,
            //backgroundColor: 'red',
          },
        ]}
      >
        {data.map((item: any,i) => {
          return (
            <Card onPress={onPressTitle}>
              <View style={styles.container} key={i}>
                <View style={styles.description}>
                  <Text style={styles.txtTop}>{item.description}</Text>
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
  );
};
export default HeaderHomePageSlider;
