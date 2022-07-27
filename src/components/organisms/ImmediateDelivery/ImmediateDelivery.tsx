import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {ScrollView, Text} from '../../atoms';
import {OfferCard} from '../../molecules';
import {Gradient} from '../../../utils';
import theme from '../../../constants';
import MaterialIcon from 'react-native-vector-icons/Entypo';
import type {IDelivery} from './types';

const ImmediateDelivery = ({data, showAll, onPressTitle}: IDelivery) => {
  return (
    <Gradient
      colors={[theme.COLORS.BLUE.SECONDARY, theme.COLORS.BLUE.DARK]}
      style={styles.background}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}>
        {data.map(({item, index}:any) => {
          return (
            <OfferCard
              testID={`offerCard-${index}`}
              onPress={onPressTitle}
              OfferImage={item.OfferImage}
              title={item.title}
              price={item.price}
              off={item.off}
              mainPrice={item.mainPrice}
              style={styles.card}
            />
          );
        })}
      </ScrollView>
      <View style={styles.deliveryTxt}>
        <Text color={theme.COLORS.WHITE} fontSize={20}>
          ۲۴ تا ۴۸ ساعت
        </Text>
        <Text fontWeight={'bold'} color={theme.COLORS.WHITE} fontSize={25}>
          تحویل فوری
        </Text>
      </View>
      <View style={styles.showAll}>
        <MaterialIcon size={20} name={'chevron-left'} color={'yellow'} />
        <Text
          testID="showAllText-id"
          onPress={showAll}
          fontWeight={'bold'}
          color={theme.COLORS.WHITE}>
          نمایش همه
        </Text>
      </View>
    </Gradient>
  );
};
export default ImmediateDelivery;
