import React from 'react';
import {Text} from 'react-native';
import type {IText} from './Text.type';

//i wonder which one is better
//const CustomText = <T extends Record<any, unknown>>() => {}
//or
// const CustomText: FC <> = () => {}

const CustomText = <T extends Record<any, unknown>>({
  children,
  onPress,
  testID,
  ...otherProps
}: IText & T) => (
  <Text onPress={onPress} testID={testID} style={{...otherProps}}>
    {children}
  </Text>
);
export default CustomText;
