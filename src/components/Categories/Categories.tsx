import React from 'react';
import { Text } from '../../atoms';
import { View } from 'react-native'
import CategoriesCard from './CategoriesCard/CategoriesCard';
import { ICategories } from './Categories.type';
import LayoutDivision from './../../atoms/LayoutDivision/index';
import layout from '../../atoms/Layout';


const Categories = ({ data, onPressItem }: ICategories) => {

    //     const column=3;
    //    const colorBorder='#000';
    //    const widthBorder=2; 
    //    const index=5

    // console.log('test obj style',()=>layout({data,column,colorBorder,widthBorder,index}))
    return (
        <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
            <Text fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
                marginBottom={20} paddingRight={13} >
                دسته بندیها
            </Text>
            <LayoutDivision styleItemModule={layout} onPressItem={onPressItem} column={3}
                data={data} ItemNode={CategoriesCard} />
        </View>

    )
}
export default Categories;