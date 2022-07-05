import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface IOffSliderGradient {
  colors: [];
  topColor?: string;
  bottomColor?: string;
}

export const OffSliderGradient = <T extends Record<any, unknown>>({
  topColor,
  bottomColor,
  ...otherGradientProps
}: T & IOffSliderGradient) => {
  return <LinearGradient colors={[topColor, bottomColor]} {...otherGradientProps} />;
};
