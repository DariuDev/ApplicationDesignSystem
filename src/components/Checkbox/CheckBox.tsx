import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";
import { CheckBoxType } from '../../types';

const CheckBox: React.FC<CheckBoxType> = ({ isCircle=false,title, isChecked = false, size = 24, colorCheck = 'pink', textColor = '#000', iconRight = true }) => {
    const [active, setActive] = useState<boolean>(isChecked);
    const handelPress = () => { setActive(prev => !prev) }
    const iconName = active ?(isCircle ?"check-circle":"check-box"):(isCircle?"radio-button-unchecked":"check-box-outline-blank") ;

    return (

        <Pressable style={[styles.container, iconRight ? { justifyContent: "flex-end" } : { justifyContent: "flex-start", }]}
            onPress={handelPress} testID="checkBox-test">
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                {!iconRight && <MaterialIcons name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
                {title && <Text style={[styles.title, { color: textColor }]} testID="checkBox-text-test">{title}</Text>}
                {iconRight && <MaterialIcons name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
            </View>

        </Pressable>


    );
};

export default CheckBox;
