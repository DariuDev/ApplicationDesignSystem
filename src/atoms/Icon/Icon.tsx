import React from 'react';
import { IIcon } from './type';


const Icon = ({ testID,name, type, size, color, style, onPress }: IIcon) => {
    const Tag = type // custom element type
    return (
        <>
            {type && name && (
                <Tag testID='icon-test' name={name} size={size} color={color} style={{...style}} onPress={onPress} />
            )}
        </>
    )
}
export default Icon;
{/* <Icon type={props.item.type} name={props.item.icon} color={focused ? Colors.white : Colors.primary} /> */ }
// export const Icons = {
//     MaterialCommunityIcons,
//     MaterialIcons,
//     Ionicons,
//     Feather,
//     FontAwesome,
//     FontAwesome5,
//     AntDesign,
//     Entypo,
//     SimpleLineIcons,
//     Octicons,
//     Foundation,
// }