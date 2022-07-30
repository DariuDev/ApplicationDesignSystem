import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text } from '../../atoms';
import type { ITopBrands } from './TopBrands.type';
import { BrandCard, SliderCarousel } from '../../molecules';

const TopBrands = ({ data1, data2, data3, onPressItem1, onPressItem2, onPressItem3 }: ITopBrands) => {
    return (
        <View testID='topBrand-id'>
            <View style={styles.titleBrand}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    برندهای برتر
                </Text>
            </View>
            <SliderCarousel
                data={data1}
                itemWideth={100}
                renderItem={({ item, index }: any) => (
                    <BrandCard
                        testID={`cardBrand1-id-${index}`}
                        image={item.image}
                        onpress={onPressItem1}
                    />
                )}
            />

            <SliderCarousel
                data={data2}
                itemWideth={100}
                renderItem={({ item, index }: any) => (
                    <BrandCard
                        testID={`cardBrand2-id-${index}`}
                        image={item.image}
                        onpress={onPressItem2}
                    />)
                }
            />
            <SliderCarousel
                data={data3}
                itemWideth={100}
                renderItem={({ item, index }: any) => (
                    <BrandCard
                        testID={`cardBrand3-id-${index}`}
                        image={item.image}
                        onpress={onPressItem3}
                    />)
                }
            />
        </View>


    );
};
export default TopBrands;