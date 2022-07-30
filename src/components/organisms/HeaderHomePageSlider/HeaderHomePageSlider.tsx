import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button, Icon, ScrollView } from '../../atoms';
import { MaterialIcons } from '../../atoms/Icon/Icon.type';
import { styles } from './style';
import type { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';
import { SliderCarousel } from '../../molecules';



const HeaderHomePageSlider = ({ dataCrouser, onPress }: IHeaderHomePageSlider) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dataCrouser.map((item: any, index) => {
        return (
          <Card onPress={onPress}
            testID={`cardHeaderHomeSlider-${index}`}
            style={styles.cardImage}>
            <Image
              testID={`cardHeaderHomeSlider-image-${index}`}
              style={styles.image}
              source={require('../../../assets/image/homePageSlider.png')}
            />
          </Card>
        )
      })}


    </ScrollView>



  );
};
export default HeaderHomePageSlider;
