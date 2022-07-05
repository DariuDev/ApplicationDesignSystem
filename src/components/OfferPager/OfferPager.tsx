import React from 'react';
import {View} from 'react-native';
import { combinedShapeBackground } from '../../assets';
import { SvgXml } from 'react-native-svg';

export const OfferPager = () => {
    return (
        <View>
            <SvgXml xml={combinedShapeBackground}/> 
            <View style={{backgroundColor: 'blue', width: '100%', height: 30, zIndex: 3}} />
        </View>
    );
}