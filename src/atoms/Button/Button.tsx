import React from 'react';
import { Text, Pressable,PressableProps } from 'react-native';
 import  styles  from './styles';
import {ButtonType} from '../../types';

type ButtonTypeProops=ButtonType & PressableProps;
const Button:React.FC<ButtonTypeProops> = ({ onPress, title, styleText , styleButton , testId = "button-wrap-test",...otherprops}) => {
    return (
            <Pressable  onPress={onPress} style={[ styles.btn,{...styleButton}]} testID={testId} {...otherprops}>
                <Text style={[ styles.txt,{...styleText}]} testID='button-text-test'>{title}</Text>
            </Pressable>

    )
}
export default Button;

