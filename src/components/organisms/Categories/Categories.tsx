import React from 'react';
import { View } from 'react-native'
import type { ICategories } from '.';
import { Layout, Text } from '../../atoms';
import { layoutBorder } from '../../../module';
import { CategoriesCard } from '../../molecules';

const Categories = ({ data, onPressItem }: ICategories) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text testID="categoriesText-id" fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
                marginBottom={20} paddingRight={13} >
                دسته بندیها
            </Text>
            <Layout testID='layoutCategories-id' onPressItem={onPressItem}
                styleItemModule={layoutBorder} column={3} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                ItemNode={({ item, onPressItem, index }: any) =>
                (<CategoriesCard
                    testID={`cardCategories-${index}`}
                    title={item.title}
                    onPress={onPressItem}
                    image={item.image}
                />
                )} />
        </View>
    )
}
export default Categories;