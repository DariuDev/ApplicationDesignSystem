import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

const Input = ({onChangeText, value, placeholder, style}) => {
  return (
    <View style={[styles.main, {...style}]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
