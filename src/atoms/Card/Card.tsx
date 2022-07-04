import React,{FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {ICard} from '../../types'

 const Card = <T extends Record<any, unknown>>({width, height, borderRadius, borderWidth, children, ...otherProps}: ICard & T ) => (
  <TouchableOpacity style={{width, height, borderRadius, borderWidth, ...otherProps}} >
    {children}
  </TouchableOpacity>
);
export default Card;