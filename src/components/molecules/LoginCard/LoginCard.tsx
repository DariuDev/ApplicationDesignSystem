import React from 'react';
import {View} from 'react-native';
import type {IMalltinaCard} from './types';
import {Card} from '../../atoms';
import {styles} from './style';

const LoginCard = <T extends Record<any, unknown>>({
  ...otherProps
}: IMalltinaCard & T) => (
  <View testID='loginCard-id' style={[styles.main, {...otherProps}]}>
    <Card style={styles.card} />
  </View>
);
export default LoginCard;
