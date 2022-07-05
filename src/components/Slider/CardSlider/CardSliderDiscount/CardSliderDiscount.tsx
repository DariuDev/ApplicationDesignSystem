import React from 'react';
import {  View, Image } from 'react-native';
import styles from './style';
import { CardHomePageType } from './type';


const CardSliderResultLastAnalys: React.FC<CardHomePageType> = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../assets/imageSlider.png')} />
        </View>



    )
}
export default CardSliderResultLastAnalys;