
import { Text } from '../../../atoms';
import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './style';
import { ICategories } from './type';

const CategoriesCard = ({ item }: ICategories) => {
  return (
    <Pressable
      style={styles.cardItem}
      onPress={() => console.log(item._id)}>
      <View style={styles.viewImage} />
      <Text>{item.title}</Text>
    </Pressable>
  )
};

export default CategoriesCard;