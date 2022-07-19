import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text, Layout } from '../../atoms';
import BestSellingLaptopCard from './BestSellingLaptopCard/BestSellingLaptopCard';
// import { IAccessories } from './AccessoriesOrnaments.types';
export interface IBestSellingLaptop{
    data:object[];
    showAll:()=>void;
    // onPressItem:()=>void
}



const BestSellingLaptop = ({ data, showAll }: IBestSellingLaptop) => {
    return (
        <View style={styles.content}>
            <View style={styles.titleAccessories}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    پرفروش ترین لپ تاب های آمازون
                </Text>
            </View>
            <Layout column={2} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                // onPressItem={onPressItem}
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
