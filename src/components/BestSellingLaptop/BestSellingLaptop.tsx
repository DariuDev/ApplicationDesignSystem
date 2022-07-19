import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text, Layout } from '../../atoms';
import { IBestSellingLaptop } from './BestSellingLaptop.type';
import BestSellingLaptopCard from './BestSellingLaptopCard';


const BestSellingLaptop = ({ data, showAll,onPressItem }: IBestSellingLaptop) => {
    return (
        <View >
            <View style={styles.titleAccessories}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    پرفروش ترین لپ تاب های آمازون
                </Text>
            </View>
            <Layout styleRow={{ height: 250,}} onPressItem={onPressItem} column={2} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                ItemNode={BestSellingLaptopCard}
            />
            <View style={styles.showAll}>
                <Text onPress={showAll} fontWeight={'bold'} color={'#0068c5'}>
                    نمایش همه
                </Text>
            </View>
        </View>

    );
};
export default BestSellingLaptop;
