import { Pressable, Text, View } from "react-native";
import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  styles  from "./styles";

const CheckBox = ({ title, isChecked, onPress, size=24, colorCheck='red', textColor='green', iconRight = true }) => {
    const iconName = isChecked ?
        "check-box" : "check-box-outline-blank";

    return (
        <View style={[styles.container,iconRight?{ justifyContent: "flex-end"}:{ justifyContent: "flex-start",}]}>
            <Pressable onPress={onPress} >
                <View style={{flexDirection:'row',justifyContent:'space-between',  alignItems: "center",}}>
                    {!iconRight && <MaterialIcons  name={iconName} size={size} color={colorCheck} />}
                    <Text style={[styles.title, { color: textColor }]}>{title}</Text>
                    {iconRight && <MaterialIcons  name={iconName} size={size} color={colorCheck} />}
                </View>
                
            </Pressable>
            
        </View>
    );
};

export default CheckBox;
