
import { Card, Text } from '../../../atoms';
import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './style';
import { ICategories } from './type';

const CategoriesCard = ({ item }: ICategories) => {
  return (
    <Card style={styles.cardItem} onPress={() => console.log(item._id)}>
      <View >
        <View style={styles.viewImage} />
        <Text>{item.title}</Text>
      </View>
    </Card>
  )
};

export default CategoriesCard;