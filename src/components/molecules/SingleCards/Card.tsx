import React from 'react';
import {View} from 'react-native';
import {Text} from '../../atoms';
import {styles} from './style';
import type {ICard} from './types';

const SingleCard = ({onPressCard, title}: ICard) => (
  <View style={styles.main}>
    <View style={styles.detail}>
      <Text testID='title-id' color={'black'} fontSize={20} fontWeight={'bold'} marginBottom={10}>
        {title}
      </Text>
      <View style={styles.card}>
        <Text testID='button-id' onPress={onPressCard} fontWeight={'bold'} color={'#fff'}>
          {'مشاهده'}
        </Text>
      </View>
    </View>
  </View>
);
export default SingleCard;
