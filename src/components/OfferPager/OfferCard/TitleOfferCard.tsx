import React from 'react';
import {View} from 'react-native';
import {Card, Text} from '../../../atoms';
import {styles} from './style';
import {ITitleOfferCard} from './types';

const TitleOfferCard = ({
  titleImage,
  mainPrice,
  price,
  timer,
  title,
  off,
}: ITitleOfferCard) => (
  <Card flex={1} zIndex={3} height="100%" width="100%" position="absolute">
    <View style={{flex: 1}}>
      <View style={styles.titleImage}>{titleImage}</View>
      <View style={styles.mainPrice}>{mainPrice}</View>
      <View style={styles.price}>{price}</View>
      <View style={styles.timer}>{timer}</View>
      <View style={styles.txtTitle}>
        <Text color="#fff">{title}</Text>
      </View>
      <View style={styles.off}>{off}</View>
    </View>
  </Card>
);
export default TitleOfferCard;
