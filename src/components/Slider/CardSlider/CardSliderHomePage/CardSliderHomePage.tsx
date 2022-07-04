import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '../../../../atoms';
import styles from './style';
import { CardHomePageType } from './type';

const CardSliderResultLastAnalys: React.FC<CardHomePageType> = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.description} >
                <Text style={styles.txtTop}>{item.description}</Text>
                <Text style={styles.txtBottom}>{item.title}</Text>
                <Button title={'کلیک کن'} styleButton={styles.button} styleText={styles.txtButton} />
            </View>
            <Image style={styles.image} source={require('../../../../assets/imageSlider.png')} />
        </View>



    )
}
export default CardSliderResultLastAnalys;