import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Card, ScrollView, Text } from '../../atoms';
import type { ITopBrands } from './TopBrands.type';
// import TopBrandCard from '../../molecules/BrandCard';

const TopBrands = ({ data1, data2, data3, onPressItem1, onPressItem2, onPressItem3 }: ITopBrands) => {
    return (
        <View testID='topBrand-id'>
            <View style={styles.titleBrand}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    برندهای برتر
                </Text>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {data1.map((item: any,index) => {
                    return (
                        <Card testID={`cardBrand1-id-${index}`} style={styles.card} onPress={onPressItem1}>
                            <Text>{item.imageBrand}</Text>
                        </Card>
                    );
                })}
            </ScrollView>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {data2.map((item: any,index) => {
                    return (
                        <Card testID={`cardBrand2-id-${index}`} style={styles.card} onPress={onPressItem2}>
                            <Text>{item.imageBrand}</Text>
                        </Card>
                    );
                })}
            </ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {data3.map((item: any,index) => {
                    return (
                        <Card testID={`cardBrand3-id-${index}`} style={styles.card} onPress={onPressItem3}>
                            <Text>{item.imageBrand}</Text>
                        </Card>
                    );
                })}
            </ScrollView>
        </View>


    );
};
export default TopBrands;