import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text, Layout} from '../../atoms';
import type {IBestSellingLaptop, IBestSellingLaptopCard} from '.';
import {layoutBorder} from '../../../module';
import {OfferCard} from '../../molecules';

const BestSellingLaptop = ({
  data,
  showAll,
  onPressItem,
}: IBestSellingLaptop) => {
  return (
    <View>
      <View style={styles.titleAccessories}>
        <Text testID='bestSellingText-id' color={'#172b4d'} fontSize={20} fontWeight={'500'}>
          پرفروش ترین لپ تاب های آمازون
        </Text>
      </View>
      <Layout
        testID="layoutBestLaptop-id"
        styleItemModule={layoutBorder}
        styleRow={{height: 250}}
        onPressItem={onPressItem}
        column={2}
        data={data}
        colorBorder={'#edf0f5'}
        widthBorder={1}
        ItemNode={({item, index,onPressItem}: IBestSellingLaptopCard) => (
          <OfferCard
            testID={`offerCardBestLaptop-${index}`}
            onPressTitle={onPressItem}
            OfferImage={item.OfferImage}
            title={item.title}
            price={item.price}
            off={item.off}
            mainPrice={item.mainPrice}
            style={styles.card}
          />
        )}
      />
      <View style={styles.showAll}>
        <Text
          testID="showAllBestLaptopText-id"
          onPress={showAll}
          fontWeight={'bold'}
          color={'#0068c5'}>
          نمایش همه
        </Text>
      </View>
    </View>
  );
};
export default BestSellingLaptop;
