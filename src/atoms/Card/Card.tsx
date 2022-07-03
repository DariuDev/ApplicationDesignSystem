import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ICard} from '../../types'

 const Card = ({width, height, borderRadius, borderWidth, children}: ICard ) => (
  <TouchableOpacity style={{width, height, borderRadius, borderWidth}} >
    {children}
  </TouchableOpacity>
);
export default Card;
