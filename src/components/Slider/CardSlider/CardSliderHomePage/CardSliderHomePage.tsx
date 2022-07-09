import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from '../../../../atoms';
import styles from './style';
import { CardHomePageType } from './type';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CardSliderHomePage: React.FC<CardHomePageType> = ({ item }) => {
    return (

        <View style={styles.container} key={item._id}>
            <View style={styles.description} >
                <Text style={styles.txtTop}>{item.description}</Text>
                <Text style={styles.txtBottom}>{item.title}</Text>
                <Button title={'کلیک کن'} styleButton={styles.button} styleText={styles.txtButton} >
                    <MaterialIcons name={'arrow-back-ios'} size={14} color={'#fff'} />
                </Button>
            </View>
            {/* <View  style={styles.image}> */}
            <Image style={styles.image} source={require('../../../../assets/imageSlider.png')} />
            {/* </View> */}
        </View>






    )
}
export default CardSliderHomePage;