import React from 'react';
import { Pressable,PressableProps } from 'react-native';
import { BadgeType } from './../../types';
import styles from './styles';

// type BadgeTypeProops=BadgeType & PressableProps;

const Badge = ({
    onPress = () => {},
    styleBadge,
    testId,
    children,
    visibale = true,
    size = 20,
    top = 100,
    left = 100,
    ...otherprops

}:BadgeType & PressableProps) => {
console.log(otherprops);

    if (!visibale) return null;
    return (
        <Pressable   testID={testId} onPress={onPress} 
            style={[styles.badgeCard, {
                borderRadius: size / 2,
                top: top,
                left: left,
                width: size,
                height: size,
                ...styleBadge
            }]}  {...otherprops}>

            {children }
        </Pressable>

    )
}
export default Badge;

