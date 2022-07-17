import React from 'react';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

export const Gradient =({
  ...otherGradientProps
} :LinearGradientProps) => {
  return <LinearGradient {...otherGradientProps}></LinearGradient>;
};
