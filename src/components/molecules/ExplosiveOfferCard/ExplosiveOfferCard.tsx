import React from 'react';
import {View} from 'react-native';
import {Card, Text} from '../../atoms';
import theme from '../../../constants';
import {styles} from './style';
import type {IExplosiveOfferCard} from './types';

const ExplosiveOfferCard = ({
  titleImage,
  mainPrice,
  price,
  timer,
  title,
  off,
}: IExplosiveOfferCard) => (
  <Card style={styles.card}>
    <View style={{flex: 1}}>
      <View testID='titleImage-id' style={styles.titleImage}><Text>{titleImage}</Text></View>
      <View testID='mainPrice-id' style={styles.mainPrice}><Text>{mainPrice}</Text></View>
      <View testID='price-id' style={styles.price}><Text>{price}</Text></View>
      <View testID='timer-id' style={styles.timer}><Text>{timer}</Text></View>
      <View testID='title-id' style={styles.txtTitle}>
        <Text color={theme.COLORS.WHITE}>{title}</Text>
      </View>
      <View testID='off-id' style={styles.off}><Text>{off}</Text></View>
    </View>
  </Card>
);
export default ExplosiveOfferCard;
