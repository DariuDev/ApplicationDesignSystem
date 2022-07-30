import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Card } from '../../atoms';
import { styles } from './style';
import type { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';
import { SliderCarousel } from '../../molecules';
const SLIDER_WIDTH = Dimensions.get('window').width;

const HeaderHomePageSlider = ({ dataCrouser, onPress }: IHeaderHomePageSlider) => {
  return (
    <SliderCarousel
      data={dataCrouser}
      itemWideth={SLIDER_WIDTH - 30}
      renderItem={({ item, index }: any) => (
        <Card onPress={onPress}
          testID={`cardHeaderHomeSlider-${index}`}
          style={styles.cardImage}>
          <Image
            testID={`cardHeaderHomeSlider-image-${index}`}
            style={styles.image}
            source={require('../../../assets/image/homePageSlider.png')}
          />
        </Card>
      )}

    />
  );
};
export default HeaderHomePageSlider;
