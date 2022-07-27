import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import type {IOfferCard} from './OfferCard.type';
import {Card,Text} from '../../atoms';
import theme from '../../../constants';

const OfferCard = <T extends Record<any, unknown>>({
  onPressTitle,
  OfferImage,
  title,
  off,
  price,
  mainPrice,
  testID,
  ...otherProps
}: IOfferCard & T) => (
  <Card onPress={onPressTitle} testID={'OfferCard-id'} {...otherProps}>
    <View style={styles.card}>
      <View style={styles.image}>
        <Text testID='OfferImage-id'>{OfferImage}</Text>
      </View>
      <View style={styles.title}>
        <Text testID='OfferTitle-id' color={'black'}>{title}</Text>
      </View>
      {off ? <View style={styles.off}>
        <Text testID='OfferOff-id' fontSize={12} color={theme.COLORS.WHITE}>
          {off}
        </Text>
        <Text fontSize={12} color={theme.COLORS.WHITE}>
          %off
        </Text>
      </View> : null}
      <View style={styles.price}>
        <Text fontSize={15} fontWeight={'bold'}>
          تومان
        </Text>
        <Text testID='OfferPrice-id' fontSize={15} fontWeight={'bold'}>
          {price}
        </Text>
      </View>
      <View style={styles.mainPrice}>
        <Text testID='OfferMainPrice-id' color={'gray'} fontSize={12}>
          {mainPrice}
        </Text>
      </View>
    </View>
  </Card>
);
export default OfferCard;
