import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const RadioButton = ({data, title, onPress}) => {
  const [options, setOptions] = useState(null);
  
  const selectHandler = (value, title) => {
      onPress(value);
      setOptions(value);
  }
  return (
    <View style={styles.mainView}>
      {data.map(item => {
        return (
          <View style={styles.mainView}>
          <TouchableOpacity
            onPress={() => selectHandler(item.value)}
            style={
              item.value === options ? styles.selected : styles.unselected
            }>
            <Text style={styles.option}>{item.value}</Text>
          </TouchableOpacity>
          <Text>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default RadioButton;
