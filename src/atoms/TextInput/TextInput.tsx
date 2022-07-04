import React from 'react';
import {View, TextInput} from 'react-native';
import {ITextInput} from '../../types';
import styles from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = (props: ITextInput) => {
  const {
    style,
    testID,
    iconName,
    iconSize,
    iconColor,
    ...otherProps
  } = props;
  return (
    <View style={styles.main}>
      <View style={styles.icon}>
      {/* <MaterialIcon name={iconName} size={iconSize} color={iconColor} /> */}
      </View>
      <TextInput
        testID={testID}
        style={[ styles.txt, {...style}]}
        {...otherProps}
      />
    </View>
  );
};

export default Input;
