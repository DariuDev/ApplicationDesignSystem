import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const RadioButton = ({data, onPress}) => {
  const [options, setOptions] = useState(null);
  
  const selectHandler = (value) => {
      onPress(value);
      setOptions(value);
  }
  return (
    <View>
      {data.map(item => {
        return (
          <TouchableOpacity
            onPress={() => selectHandler(item.value)}
            style={
              item.value === options ? styles.selected : styles.unselected
            }>
            <Text>{item.value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default RadioButton;
