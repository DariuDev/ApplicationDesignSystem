import React from 'react';
import {Pressable} from 'react-native';
import type ICard from './Card.type';

const Card = <T extends Record<any, unknown>>({
  onPress,
  children,
  testID="card-id",
  ...otherProps
}: ICard & T) => (
  <Pressable
    testID={testID}
    onPress={onPress}
   {...otherProps}
   >
    {children}
  </Pressable>
);
export default Card;
