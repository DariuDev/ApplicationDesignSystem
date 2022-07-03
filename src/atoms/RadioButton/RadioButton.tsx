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
  } = props;
  const [options, setOptions] = useState<number>(0);

  const selectHandler = (value: number, title?: string) => {
    !onPress ? undefined : onPress(value);
    setOptions(value);
  };
  return (
    <View style={[styles.mainView, {...style}]}>
      {data?.map((item: any, index) => (
        <View style={[styles.mainView, {...style}]} key={index}>
          <TouchableOpacity
            onPress={() => selectHandler(item.value)}
            testID={`radioButton-${index}`}
            style={
              item.value === options
                ? [styles.mediumSelected, {...selectedStyle}]
                : [styles.mediumUnselected, {...unselectedStyle}]
            }>
            <Text style={[styles.option, {...titleStyle}]}>{item.value}</Text>
          </TouchableOpacity>
          <Text>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};
export default RadioButton;
