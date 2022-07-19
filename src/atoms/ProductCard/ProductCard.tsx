import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import type {IProductCard} from './ProductCard.type';
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
  <Card {...otherProps}>
    <View style={styles.card}>
      <View style={styles.image}>
        <Text>{productImage}</Text>
      </View>
      <View style={styles.title}>
        <Text color={'black'}>{title}</Text>
      </View>
      {off ? <View style={styles.off}>
        <Text fontSize={12} color={'#fff'}>
          {off}
        </Text>
        <Text fontSize={12} color={'#fff'}>
          %off
        </Text>
      </View> : null}
      <View style={styles.price}>
        <Text fontSize={15} fontWeight={'bold'}>
          تومان
        </Text>
        <Text fontSize={15} fontWeight={'bold'}>
          {price}
        </Text>
      </View>
      <View style={styles.mainPrice}>
        <Text color={'gray'} fontSize={12}>
          {mainPrice}
        </Text>
      </View>
    </View>
  </Card>
);
export default ProductCard;
