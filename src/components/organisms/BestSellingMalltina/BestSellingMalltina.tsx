import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Text, Layout} from '../../atoms';
import type {IBestSellingMalltina, IBestSellingMalltinaCard} from './';
import {layoutBorder} from '../../../module';
import {OfferCard} from '../../molecules';


const BestSellingMalltina = ({
  data,
  showAll,
  onPressItem,
}: IBestSellingMalltina) => {
  return (
    <View>
      <View style={styles.titleAccessories}>
        <Text
          testID="bestSellingText-id"
          color={'#172b4d'}
          fontSize={20}
          fontWeight={'500'}>
          پرفروش های مالتینا
        </Text>
      </View>
      <Layout
        styleRow={{height: 250}}
        styleItemModule={layoutBorder}
        onPressItem={onPressItem}
        column={2}
        data={data}
        colorBorder={'#edf0f5'}
        widthBorder={1}
        ItemNode={({item, onPressItem,index}: IBestSellingMalltinaCard) => (
          <OfferCard
            testID="offerCard-id"
            onPress={onPressItem}
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
          testID="showAllText-id"
          onPress={showAll}
          fontWeight={'bold'}
          color={'#0068c5'}>
          نمایش همه
        </Text>
      </View>
    </View>
  );

};
export default BestSellingMalltina;
