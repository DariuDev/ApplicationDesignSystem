import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {IRadioButton} from '../../types';

const RadioButton = (props: IRadioButton) => {
  const {
    data,
    title,
    onPress,
    style,
    selectedStyle,
    unselectedStyle,
    titleStyle,
    testID,
  } = props;
  const [options, setOptions] = useState<[]>([]);

  const selectHandler = (value: [] , title?: string) => {
    onPress(value);
    setOptions(value);
  };
  return (
    <View style={[styles.mainView, {...style}]}>
      {data.map((item: any )=> {
        return (
          <View style={styles.mainView}>
            <TouchableOpacity
              onPress={() => selectHandler(item.value)}
              testID={testID}
              style={
                item.value === options
                  ? [styles.mediumSelected, {...selectedStyle}]
                  : [styles.mediumUnselected, {...unselectedStyle}]
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