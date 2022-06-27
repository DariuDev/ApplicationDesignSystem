import React from 'react';
import { Pressable } from 'react-native';
import { BadgeType } from './../../types';
import styles from './styles';

const Badge: React.FC<BadgeType> = ({
    onPress = () => {},
    styleBadge,
    testId,
    children,
    visibale = true,
    size = 20,
    top = 100,
    left = 100,

}) => {

    if (!visibale) return null;
    return (
        <Pressable testID={testId} onPress={onPress}
            style={[styles.badgeCard, {
                borderRadius: size / 2,
                top: top,
                left: left,
                width: size,
                height: size,
                ...styleBadge
            }]}>

            {children && children}
        </Pressable>

    )
}
export default Badge;

