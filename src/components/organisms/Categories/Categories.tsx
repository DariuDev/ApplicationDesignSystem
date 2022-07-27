import React from 'react';
import { View } from 'react-native'
import type { ICategories, ICategoriesCard } from '.';
import { Card, Layout, Text } from '../../atoms';
import { layoutBorder } from '../../../module';
import { styles } from './style';

const Categories = ({ data, onPressItem }: ICategories) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text testID="categoriesText-id" fontWeight={'bold'} fontSize={20} color={'#172b4d'} alignSelf={'center'}
                marginBottom={20} paddingRight={13} >
                دسته بندیها
            </Text>
            <Layout testID='layoutCategories-id' onPressItem={onPressItem}
                styleItemModule={layoutBorder} column={3} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                ItemNode={({ item, onPressItem, index }: ICategoriesCard) =>
                (<Card testID={`cardCategories-${index}`}
                    style={styles.cardItem} onPress={onPressItem}>
                    <View>
                        <View style={styles.viewImage} />
                        <Text>{item.title}</Text>
                    </View>
                </Card>
                )} />
        </View>
    )
}
export default Categories;