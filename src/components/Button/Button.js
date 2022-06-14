import React from 'react';
import { Text, Pressable, View } from 'react-native';
 import { styles } from './styles';


const Button = ({ onPress=()=>{}, title, styleText = {}, styleBtton = {} }) => {
    return (
        // <View>
            <Pressable onPress={onPress} style={[ styles.btn,{...styleBtton}]}>
                <Text style={[ styles.txt,{...styleText}]}>{title}</Text>
            </Pressable>
        // </View>

    )
}
export default Button;

