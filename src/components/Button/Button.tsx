import React from 'react';
import { Text, Pressable } from 'react-native';
 import  styles  from './styles';
import {ButtonType} from '../../types';


const Button:React.FC<ButtonType> = ({ onPress, title, styleText , styleButton , testId = "button-wrap-test"}) => {
    return (
            <Pressable onPress={onPress} style={[ styles.btn,{...styleButton}]} testID={testId}>
                <Text style={[ styles.txt,{...styleText}]} testID='button-text-test'>{title}</Text>
            </Pressable>

    )
}
export default Button;

