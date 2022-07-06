import React from 'react';
import { ScrollView } from 'react-native';
import {Card} from '..';
import ICard from '../../types/CardType';

interface IScrollView {
    //Card: Card<ICard>;
    data?: any;
    children : JSX.Element[];
}

const CustomScrollView = <T extends Record<any, unknown>>({children, ...otherProps}: IScrollView & T) => (
    <ScrollView {...otherProps}>
        {children}
    </ScrollView>
)
export default CustomScrollView;