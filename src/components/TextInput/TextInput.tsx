import React from 'react';
import {TextInput} from 'react-native';
import {ITextInput} from '../../types';
import styles from './style';

const Input = (props: ITextInput) => {
  const {onChangeText, value, placeholder, style, testID} = props;
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      testID={testID}
      style={[styles.main, {...style}]}
    />
  );
};

export default Input;
