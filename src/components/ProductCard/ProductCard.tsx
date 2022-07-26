import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {IProductCard} from './type';
import {Card,Text} from '../../atoms';
import theme from '../../constants';

const ProductCard = <T extends Record<any, unknown>>({
  onPressTitle,
  productImage,
  title,
  off,
  price,
  mainPrice,
  ...otherProps
}: IProductCard & T) => (
  <Card testID='productCard-id' {...otherProps}>
    <View style={styles.card}>
      <View style={styles.image}>
        <Text testID='productImage-id'>{productImage}</Text>
      </View>
      <View style={styles.title}>
        <Text testID='productTitle-id' color={'black'}>{title}</Text>
      </View>
      {off ? 
      <View style={styles.off}>
        <Text testID='productOff-id' fontSize={12} color={theme.COLORS.WHITE}>
          {off}
        </Text>
        <Text fontSize={12} color={theme.COLORS.WHITE}>
          %off
        </Text> 
      </View> : null }
      <View style={styles.price}>
        <Text fontSize={15} fontWeight={'bold'}>
          تومان
        </Text>
        <Text testID='productPrice-id' fontSize={15} fontWeight={'bold'}>
          {price}
        </Text>
      </View>
      <View style={styles.mainPrice}>
        <Text testID='productMainPrice-id' color={'gray'} fontSize={12}>
          {mainPrice}
        </Text>
      </View>
    </View>
  </Card>
);
export default ProductCard;
