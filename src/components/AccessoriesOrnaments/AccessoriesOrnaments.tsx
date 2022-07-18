import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { ScrollView, Card, Text } from '../../atoms';
import { IAccessories } from './AccessoriesOrnaments.types';

const AccessoriesOrnaments = ({ data, showAll, onPressItem}: IAccessories) => {
    return (
        <View style={styles.content}>
            <View style={styles.titleAccessories}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    اکسسوری و زیورآلات ویژه آقایان
                </Text>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.list}>
                {data.map((item: any) => {
                    return (
                        <Card onPress={onPressItem} style={styles.card}>
                            <Text>{item.title}</Text>
                        </Card>
                    );
                })}
            </ScrollView>
            <View style={styles.showAll}>
                <Text onPress={showAll} fontWeight={'bold'} color={'#0068c5'}>
                    نمایش همه
                </Text>
            </View>
        </View>

    );
};
export default AccessoriesOrnaments;
