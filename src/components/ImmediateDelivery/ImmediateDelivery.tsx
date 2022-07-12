import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {ScrollView} from '../../atoms';
import {Gradient} from '../../assets';
import {Card, Text} from '../../atoms';
import MaterialIcon from 'react-native-vector-icons/Entypo';
import {IDelivery} from './types';

const ImmediateDelivery = ({data, showAll, onPressTitle}: IDelivery) => {
  return (
    <Gradient colors={['#0443c0', '#00349b']} style={styles.background}>
      <ScrollView
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}>
        {data.map((item: any) => {
          return (
            <Card
              onPress={onPressTitle}
              marginTop={10}
              marginHorizontal={5}
              flex={1}
              borderRadius={15}
              height={250}
              width={150}
              alignItems={'center'}
              justifyContent={'center'}
              backgroundColor={'white'}>
              <Text>{item.title}</Text>
            </Card>
          );
        })}
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <Text color={'#fff'} fontSize={20}>
          ۲۴ تا ۴۸ ساعت
        </Text>
        <Text fontWeight={'bold'} color={'#fff'} fontSize={25}>
          تحویل فوری
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <MaterialIcon size={20} name={'chevron-left'} color={'yellow'} />
        <Text onPress={showAll} fontWeight={'bold'} color={'#fff'}>
          نمایش همه
        </Text>
      </View>
    </Gradient>
  );
};
export default ImmediateDelivery;
