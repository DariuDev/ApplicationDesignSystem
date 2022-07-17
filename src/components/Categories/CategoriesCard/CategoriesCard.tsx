
import { Card, Text } from '../../../atoms';
import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './style';
import { ICategories } from './type';

const CategoriesCard = ({ item }: ICategories) => {
  return (
    <Card onPress={() => console.log(item._id)}>
      <View
        style={styles.cardItem}>
        <View style={styles.viewImage} />
        <Text>{item.title}</Text>
      </View>
    </Card>
  )
};

export default CategoriesCard;