import React from 'react';
import {View} from 'react-native';
import {ExplosiveOffer} from '../../../assets';
import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons';
import {SvgXml} from 'react-native-svg';
import {Card, ScrollView, Text} from '../../atoms';
import {Gradient} from '../../../utils';
import {styles} from './style';
import ExplosiveOfferCard from '../../molecules/ExplosiveOfferCard';
import {useState} from 'react';
import type {IOfferCard} from './type';
import theme from '../../../constants';

export const ExplosiveOffers = ({data}: IOfferCard) => {
  const [title, setTitle] = useState<string>();

  return (
    <View>
      <View>
        <SvgXml style={styles.svgXml} xml={ExplosiveOffer} />
        <ExplosiveOfferCard
          // titleImage=""
          // mainPrice=""
          // price=""
          // timer=""
          title={title}
          // off=""
        />
        <ScrollView
          testID="scrollView-id"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.list}>
          {data.map((item: any, index) => {
            return (
              <Card
                onPress={() => setTitle(item.title)}
                testID={`ExplosiveOffer-${index}`}
                style={styles.cardList}>
                <Text>{item.title}</Text>
              </Card>
            );
          })}
        </ScrollView>
      </View>

      <Gradient
        style={styles.gradient}
        colors={[theme.COLORS.RED.PRIMARY, theme.COLORS.RED.SECONDARY]}
      />
      <View style={styles.offerTitle}>
        <Text
          testID="explosiveText-id"
          fontWeight={'bold'}
          fontSize={30}
          color={theme.COLORS.WHITE}>
          انفجاری
        </Text>
        <Text
          testID="offText-id"
          fontWeight={'bold'}
          fontSize={20}
          color={theme.COLORS.WHITE}>
          تخفیف های
        </Text>
        <MaterialIcons name={'fire'} size={44} color={theme.COLORS.WHITE} />
      </View>
    </View>
  );
};
