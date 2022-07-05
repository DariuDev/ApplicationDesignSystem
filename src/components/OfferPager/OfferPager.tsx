import React from 'react';
import {View} from 'react-native';
import {combinedShapeBackground, Gradient} from '../../assets';
import MaterialIcons from 'react-native-vector-icons/SimpleLineIcons';
import {SvgXml} from 'react-native-svg';
import {Card, FlatList, Text} from '../../atoms';
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
      <View>
        <SvgXml style={{zIndex: 3}} xml={combinedShapeBackground} />
        <FlatList
          data={dataSlider}
          horizontal={true}
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => i._id}
          renderItem={() => (
            <Card
              onPress={() => console.log('pressed')}
              marginHorizontal={5}
              flex={1}
              borderRadius={15}
              width={80}
              //height={'100%'}
              backgroundColor={'white'}
            />
          )}
        />
      </View>
      <Gradient
        style={styles.gradient}
        colors={['#f8616e', '#f92a5f']}
      />
      <View
        style={styles.offerTitle}>
        <Text fontWeight={'bold'} fontSize={30} color={'#fff'}>
          انفجاری
        </Text>
        <Text fontWeight={'bold'} fontSize={20} color={'#fff'}>
          تخفیف های
        </Text>
        <MaterialIcons name={'fire'} size={44} color={'#fff'} />
      </View>
    </View>
  );
};
