import React from 'react';
import {View} from 'react-native';
import {combinedShapeBackground} from '../../assets';
import {SvgXml} from 'react-native-svg';
import {Card, FlatList} from '../../atoms';
import {styles} from './style';

export const OfferPager = () => {
  const dataSlider = [
    {
      _id: '1',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '2',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '3',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '4',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '5',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '14',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '6',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '7',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
    {
      _id: '8',
      description: 'تابستون امسال با بهترین های',
      title: 'عینک آفتابی',
    },
  ];
  return (
    <View>
      <SvgXml xml={combinedShapeBackground} />
      <FlatList
        data={dataSlider}
        horizontal={true}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={p => p._id}
        renderItem={() => (
          <Card
            onPress={() => console.log('pressed')}
            marginHorizontal={5}
            flex={1}
            borderRadius={15}
            width={80}
            height={'100%'}
            backgroundColor={'red'}
          />
        )}
      />
    </View>
  );
};
