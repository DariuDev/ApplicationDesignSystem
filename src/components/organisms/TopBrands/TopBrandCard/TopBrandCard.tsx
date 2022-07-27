import React from 'react';
import { styles } from './style';
import type{ ITopBrandCard } from './TopBrandCard.type';
import { Card, Text, ScrollView } from '../../../atoms';

const TopBrandCard = ({ data, onPressItem,testID='cardBrand-id' }: ITopBrandCard) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {data.map((item: any) => {
        return (
          <Card testID={testID} style={styles.card} onPress={onPressItem}>
            <Text>{item.txt}</Text>
          </Card>
        );
      })}
    </ScrollView>
  )
};

export default TopBrandCard;