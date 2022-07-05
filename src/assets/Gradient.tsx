import React,{FC} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient: FC<any> = ({
  ...otherGradientProps
}) => {
  return <LinearGradient {...otherGradientProps} />;
};
