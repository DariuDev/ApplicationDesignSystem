
import { Card, Text } from '../../../atoms';
import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { ICategoriesCard } from './CategoriesCard.type';

const CategoriesCard = ({ item,onPressItem }: ICategoriesCard) => {
  return (
    <Card style={styles.cardItem} onPress={onPressItem}>
      <View >
        <View style={styles.viewImage} />
        <Text>{item.title}</Text>
      </View>
    </Card>
  )
};

export default CategoriesCard;