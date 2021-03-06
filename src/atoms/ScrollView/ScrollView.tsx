import React from 'react';
import { ScrollView } from 'react-native';

interface IScrollView {
    children?: JSX.Element[] | JSX.Element;
}

const CustomScrollView = <T extends Record<any, unknown>>({children, ...otherProps}: IScrollView & T) => (
    <ScrollView testID='scrollview-id' {...otherProps}>
        {children}
    </ScrollView>
)
export default CustomScrollView;