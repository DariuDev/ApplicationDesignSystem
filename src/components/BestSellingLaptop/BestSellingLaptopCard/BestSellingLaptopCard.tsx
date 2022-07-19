
import { Card, Text } from '../../../atoms';
import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { IBestSellingLaptopCard } from './BestSellingLaptopCard.type';

const BestSellingLaptopCard = ({ item }: IBestSellingLaptopCard) => {
  return (
    <Card style={styles.cardItem}  
    onPress={() => console.log(item._id)}
    >
      <View >
        <View style={styles.viewImage} />
        <Text>{item.title}</Text>
      </View>
    </Card>
  )
};

export default BestSellingLaptopCard;