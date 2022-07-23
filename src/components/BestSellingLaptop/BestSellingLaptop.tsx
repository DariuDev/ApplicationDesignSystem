import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text } from '../../atoms';
import { IBestSellingLaptop } from './BestSellingLaptop.type';
import BestSellingLaptopCard from './BestSellingLaptopCard';
import layout from '../../atoms/Layout';
import LayoutDivision from './../../atoms/LayoutDivision/LayoutDivision';

const BestSellingLaptop = ({ data, showAll,onPressItem }: IBestSellingLaptop) => {
    return (
        <View >
            <View style={styles.titleAccessories}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    پرفروش ترین لپ تاب های آمازون
                </Text>
            </View>
            <LayoutDivision styleRow={{ height: 250}} styleItemModule={layout} onPressItem={onPressItem} column={2} data={data} 
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
