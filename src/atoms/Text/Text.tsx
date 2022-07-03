import React from 'react';
import {Text} from 'react-native';
import {IText} from '../../types'

const CustomText = <T extends Record<any, unknown>>({
  children,
  onPress,
  testID,
  ...otherProps
}: IText & T) => (
  <Text
    onPress={onPress}
    testID={testID}
    style={{...otherProps}}>
    {children}
  </Text>
);
export default CustomText;
