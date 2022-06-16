import { Pressable, Text, View } from "react-native";
import React,{useState} from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  styles  from "./styles";

const CheckBox = ({ title, isChecked=false,  size=24, colorCheck='red', textColor='green', iconRight = true }) => {
    const [active, setActive] = useState(isChecked);
  const handelPress=()=>{setActive(prev=>!prev)}
    const iconName = active ?
        "check-box" : "check-box-outline-blank";

    return (
        <View style={[styles.container,iconRight?{ justifyContent: "flex-end"}:{ justifyContent: "flex-start",}]}>
            <Pressable onPress={handelPress} testID="custtomCheckBox">
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
