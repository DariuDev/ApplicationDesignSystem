import React from 'react';
import { Layout, Text } from '../../atoms';
import { View } from 'react-native'
import CategoriesCard from './CategoriesCard/CategoriesCard';
import { ICategories } from './Categories.type';


const Categories = ({data,onPressItem}: ICategories) => {
    return (
        <View style={{ marginTop: 20,backgroundColor:'#fff' }}>
            <Text fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
                marginBottom={20} paddingRight={13} >
                دسته بندیها
            </Text>
            <Layout onPressItem={onPressItem} column={3} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                ItemNode={CategoriesCard} />
        </View>

    )
}
export default Categories;