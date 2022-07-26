import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text } from '../../atoms';
import type{ ITopBrands } from './TopBrands.type';
import TopBrandCard from './TopBrandCard';

const TopBrands = ({ data1, data2, data3, onPressItem1, onPressItem2, onPressItem3 }: ITopBrands) => {
    return (
        <View >
            <View style={styles.titleBrand}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    برندهای برتر
                </Text>
            </View>
            <TopBrandCard data={data1} onPressItem={onPressItem1} />
            <TopBrandCard data={data2} onPressItem={onPressItem2} />
            <TopBrandCard data={data3} onPressItem={onPressItem3} />
        </View>

    );
};
export default TopBrands;