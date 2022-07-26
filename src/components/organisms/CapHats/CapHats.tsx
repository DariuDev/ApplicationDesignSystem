import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { Text, Layout } from '../../atoms';
import type { ICapHats, ICapHatsCard } from '.';
import { layoutBorder } from '../../../module';
import { OfferCard } from '../../molecules';

const CapHats = ({ data, showAll, onPressItem }: ICapHats) => {
    return (
        <View >
            <View style={styles.titleAccessories}>
                <Text color={'#172b4d'} fontSize={20} fontWeight={'500'} >
                    کلاه های کپ
                </Text>
            </View>
            <Layout styleRow={{ height: 250, }} styleItemModule={layoutBorder} onPressItem={onPressItem} column={2} data={data} colorBorder={'#edf0f5'} widthBorder={1}
                ItemNode={({ item, onPressItem }: ICapHatsCard) =>
                (<OfferCard
                    onPress={onPressItem}
                    productImage={item.productImage}
                    title={item.title}
                    price={item.price}
                    off={item.off}
                    mainPrice={item.mainPrice}
                    style={styles.card}
                />)
                }
            />
            <View style={styles.showAll}>
                <Text onPress={showAll} fontWeight={'bold'} color={'#0068c5'}>
                    نمایش همه
                </Text>
            </View>
        </View>

    );
};
export default CapHats;
