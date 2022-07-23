import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
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
  useEffect(() => {
    let timer = setTimeout(() => {
      if (current < lenght - 2) {
        setCurrent(prev => prev + 1);
      } else {
        setCurrent(0);
      }

      sliderRef?.current?.scrollTo({x: SCREEN_WIDTH * current, animated: true});
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <ScrollView
      horizontal={true}
      ref={sliderRef}
      showsHorizontalScrollIndicator={false}
      style={{marginEnd: 10, marginTop: 10}}>
      {data.map((item: any) => {
        return (
          <Card onPress={onPressTitle}>
            <View style={styles.container} key={item._id}>
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
              <Image
                style={styles.image}
                source={require('../../assets/imageSlider.png')}
              />
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
};
export default HeaderHomePageSlider;
