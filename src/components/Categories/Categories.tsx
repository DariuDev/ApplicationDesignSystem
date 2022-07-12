import React from 'react';
import { Layout ,Text} from '../../atoms';
// import {Text} from 'react-native';
import { View } from 'react-native'
import CategoriesCard from './CategoriesCard/CategoriesCard';

const dataCategories = [
    { _id: '114', title: 'لوازم خودرو', img: 'hjggjhghjj' },
    { _id: '115', title: 'لوازم التحریر', img: 'hjggjhghjj' },
    { _id: '116', title: 'ورزش وسفر', img: 'hjggjhghjj' },
    { _id: '117', title: 'تندرستی', img: 'hjggjhghjj' },
    { _id: '118', title: 'خانه و باغچه', img: 'hjggjhghjj' },
    { _id: '119', title: 'اسباب بازی', img: 'hjggjhghjj' },
    { _id: '117', title: 'تندرستی', img: 'hjggjhghjj' },
    { _id: '118', title: 'خانه و باغچه', img: 'hjggjhghjj' },
    { _id: '119', title: 'اسباب بازی', img: 'hjggjhghjj' },
];

const Categories = () => {
    return (
        <View style={{marginTop:20}}>
            {/* <Text style={{fontWeight:'500',alignSelf:'center',fontSize:20,color:'#000',marginBottom:20,paddingRight:13}}> دسته بندیها</Text> */}
           <Text fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
           marginBottom={20} paddingRight={13} > 
            دسته بندیها
          </Text>
            <Layout column={3} data={dataCategories} colorBorder={'grey'} widthBorder={1}
                ItemNode={CategoriesCard} />
        </View>

    )
}
export default Categories;