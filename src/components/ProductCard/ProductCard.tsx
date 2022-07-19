import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {IProductCard} from './type';
import {Card} from '../../atoms';
import {Text} from 'application-design-system';

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
      {off ? 
      <View style={styles.off}>
        <Text fontSize={12} color={'#fff'}>
          {off}
        </Text>
        <Text fontSize={12} color={'#fff'}>
          %off
        </Text> 
      </View> : null }
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
