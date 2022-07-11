import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text } from '../../../../atoms';
import styles from './style';
import { SliderCategoriesType } from './type';


const CardSliderCategories = ({ item, index, onPress }: SliderCategoriesType) => {
    let styleBorder;
    if (index === 2) {
        styleBorder = { borderBottomColor: '#000', borderLeftColor: '#000', borderBottomWidth: 1, borderLeftWidth: 1 }
    }
    if (index === 5) {
        styleBorder = { borderTopColor: '#000', borderBottomColor: '#000', borderLeftColor: '#000', borderBottomWidth: 1, borderLeftWidth: 1, borderTopWidth: 1 }
    }
    if (index === 6) {
        styleBorder = { borderRightColor: '#000', borderRightWidth: 1 }
    }
    if (index === 8) {
        styleBorder = { borderLeftColor: '#000', borderLeftWidth: 1 }
    }
    else if ((index !== 2) && (index !== 5) && (index !== 6) && (index !== 7) && (index !== 8)) {
        styleBorder = { borderBottomColor: '#000', borderRightColor: '#000', borderBottomWidth: 1, borderRightWidth: 1 }

    }


    return (
        <Pressable style={[styles.container, { ...styleBorder }
            //    {borderBottomColor:'#000',
            //  borderRightColor:'#000',
            //  borderBottomWidth:1,
            //  borderRightWidth:1
            // }
        ]} onPress={() => console.log(index)}>
            <View style={{ width: 50, height: 50, backgroundColor: 'pink' }} />
            {/* <Image style={styles.image} source={require('../../../../assets/imageSlider.png')} /> */}
            <Text>{item.title}</Text>
        </Pressable>



    )
}
export default CardSliderCategories;