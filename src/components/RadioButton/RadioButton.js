import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const RadioButton = ({
  data,
  title,
  onPress,
  style,
  selectedStyle,
  unselectedStyle,
  titleStyle,
  testID,
}) => {
  const [options, setOptions] = useState(null);

  const selectHandler = (value, title) => {
    onPress(value);
    setOptions(value);
  };
  return (
    <View style={[styles.mainView, {...style}]}>
      {data.map((item) => {
        return (
          <View style={styles.mainView}>
            <TouchableOpacity
              onPress={() => selectHandler(item.value)}
              testID={testID}
              style={
                item.value === options
                  ? [styles.selected, {...selectedStyle}]
                  : [styles.unselected, {...unselectedStyle}]
              }>
              <Text style={[styles.option, {...titleStyle}]}>{item.value}</Text>
            </TouchableOpacity>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </View>
  );
};
export default RadioButton;
