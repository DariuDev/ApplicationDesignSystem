import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, Button, Icon } from '../../atoms';
import { MaterialIcons } from '../../atoms/Icon/Icon.type';
import { styles } from './style';
import type { IHeaderHomePageSlider } from './HeaderHomePageSlider.type';
import { SliderCarousel } from '../../molecules';


const HeaderHomePageSlider = ({ dataCrouser, onPress }: IHeaderHomePageSlider) => {
  return (
    <SliderCarousel
      data={dataCrouser}
      renderItem={( item: any, index: number ) => (
        <Card testID={`cardHeaderHomeSlider-${index}`}
          onPress={onPress}>
          <View style={styles.container} >
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
              source={require('../../../assets/image/imageSlider.png')}
            />
          </View>
        </Card>
      )}

    />
  );
};
export default HeaderHomePageSlider;
