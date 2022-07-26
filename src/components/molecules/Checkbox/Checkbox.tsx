import { Pressable, Text, View, PressableProps } from "react-native";
import React, { useState, useCallback } from "react";
import { MaterialIcons } from '../../atoms/Icon/Icon.type';
import { Icon } from '../../atoms';
import { styles } from './style';
import type { CheckBoxType } from './Checkbox.type';

const CheckBox = ({ isCircle = false,
    title, isChecked = false,
    size = 24,
    colorCheck = 'pink',
    textColor = '#000',
    iconRight = true,
    ...otherprops }: CheckBoxType & PressableProps) => {
    const [active, setActive] = useState<boolean>(isChecked);
    const handelPress = useCallback(() => { setActive(prev => !prev) }, [active]);
    const iconName = active ? (isCircle ? "check-circle" : "check-box") : (isCircle ? "radio-button-unchecked" : "check-box-outline-blank");
    return (
        <Pressable style={[styles.container, iconRight ? { justifyContent: "flex-end" } : { justifyContent: "flex-start", }]}
            onPress={handelPress} testID="checkBox-test" {...otherprops}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", }}>
                {!iconRight && <Icon type={MaterialIcons} name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
                {title && <Text style={[styles.title, { color: textColor }]} testID="checkBox-text-test">{title}</Text>}
                {iconRight && <Icon type={MaterialIcons} name={iconName} size={size} color={colorCheck} testID="checkBox-icon-test" />}
            </View>
        </Pressable>
    );
};

export default CheckBox;