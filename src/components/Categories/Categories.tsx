import React from 'react';
import { Layout, Text } from '../../atoms';
import { View } from 'react-native'
import CategoriesCard from './CategoriesCard/CategoriesCard';
import { ICategories } from './Categories.type';


const Categories = ({data}: ICategories) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
                marginBottom={20} paddingRight={13} >
                دسته بندیها
            </Text>
            <Layout column={3} data={data} colorBorder={'grey'} widthBorder={1}
                ItemNode={CategoriesCard} />
        </View>

    )
}
export default Categories;