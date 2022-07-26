import React from 'react';
import {ScrollView, Text, Card} from '../../atoms';
import {View} from 'react-native';
import {styles} from './style';
import type {IHistoryVisit} from './History.type';
import theme from '../../../constants';

const HistoryVisit = ({showAll, onPressItem, data}: IHistoryVisit) => (
  <View style={styles.main}>
    <Text fontWeight={'bold'} fontSize={20}>
      تاریخچه بازدیدهای اخیر شما
    </Text>
    <ScrollView
      testID="scrollView-id"
      showsHorizontalScrollIndicator={false}
      horizontal={true}>
      {data.map((item: any, index) => {
        return (
          <Card
            testID={`cardItem-${index}`}
            onPress={onPressItem}
            style={styles.cardList}>
            <Text>{item.title}</Text>
          </Card>
        );
      })}
    </ScrollView>
    <Text
      testID="editText-id"
      onPress={showAll}
      fontWeight={'bold'}
      color={theme.COLORS.BLUE.LIGHT}>
      ویرایش یا نمایش همه
    </Text>
  </View>
);
export default HistoryVisit;
