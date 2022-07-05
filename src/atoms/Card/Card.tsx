import React from 'react';
import {Pressable} from 'react-native';
import {ICard} from '../../types'

 const Card = <T extends Record<any, unknown>>({width, height, borderRadius, borderWidth, children, ...otherProps}: ICard & T ) => (
  <Pressable style={{width, height, borderRadius, borderWidth, ...otherProps}} >
    {children}
  </Pressable>
);
export default Card;