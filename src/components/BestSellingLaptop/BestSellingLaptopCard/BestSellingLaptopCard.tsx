import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { IBestSellingLaptopCard } from './BestSellingLaptopCard.type';
import {  ProductCard } from '../../../atoms';

const BestSellingLaptopCard = ({ item ,onPressItem}: IBestSellingLaptopCard) => {
  return (
    <ProductCard
      onPress={onPressItem}
      productImage={item.productImage}
      title={item.title}
      price={item.price}
      off={item.off}
      mainPrice={item.mainPrice}
      style={styles.card}
    />
  )
};

export default BestSellingLaptopCard;