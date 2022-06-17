import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

const Input = ({onChangeText, value, placeholder, style, testID}) => {
  return (
    <View style={[styles.main, {...style}]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        testID={testID}
      />
    </View>
  );
};

export default Input;
