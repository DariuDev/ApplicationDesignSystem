import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import type{IAccessories} from './AccessoriesOrnaments.types';
import { ScrollView, Text} from '../../atoms';
import {OfferCard} from '../../molecules';

const AccessoriesOrnaments = ({data, showAll, onPressItem}: IAccessories) => {
  return (
    <View>
      <View style={styles.titleAccessories}>
        <Text color={'#172b4d'} fontSize={20} fontWeight={'500'}>
          اکسسوری و زیورآلات ویژه آقایان
        </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {data.map((item: any,index) => {
          return (
            <OfferCard
              onPress={onPressItem}
              testID={`offerCardAccessories${index}`}
              productImage={item.productImage}
              title={item.title}
              price={item.price}
              off={item.off}
              mainPrice={item.mainPrice}
              style={styles.card}
            />
          );
        })}
      </ScrollView>
      <View style={styles.showAll}>
        <Text testID="showAllTextAccessories-id" onPress={showAll} fontWeight={'bold'} color={'#0068c5'}>
          نمایش همه
        </Text>
      </View>
    </View>
  );
};
export default AccessoriesOrnaments;
