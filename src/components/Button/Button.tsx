import React from 'react';
import { Text, Pressable } from 'react-native';
 import  styles  from './styles';
import {ButtonType} from '../../types';


const Button:React.FC<ButtonType> = ({ onPress, title, styleText , styleBtton }) => {
    return (
            <Pressable onPress={onPress} style={[ styles.btn,{...styleBtton}]} testID="custtomButton">
                <Text style={[ styles.txt,{...styleText}]}>{title}</Text>
            </Pressable>

    )
}
export default Button;

