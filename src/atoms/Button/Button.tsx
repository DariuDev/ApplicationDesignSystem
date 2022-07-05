import React from 'react';
import { Text, Pressable,PressableProps } from 'react-native';
 import  styles  from './styles';
import {ButtonType} from '../../types';

type ButtonTypeProops=ButtonType & PressableProps;
const Button:React.FC<ButtonTypeProops> = ({  isRightChildren=false ,children,onPress, title, styleText , styleButton , testId = "button-wrap-test",...otherprops}) => {
    return (
            <Pressable  onPress={onPress} style={[ styles.btn,{...styleButton}]} testID={testId} {...otherprops}>
                {!isRightChildren &&  children}
                <Text style={[ styles.txt,{...styleText}]} testID='button-text-test'>{title}</Text>
                {isRightChildren && children}
            </Pressable>

    )
}
export default Button;

