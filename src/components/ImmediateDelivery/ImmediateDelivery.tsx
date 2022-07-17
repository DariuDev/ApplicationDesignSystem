import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {ScrollView, Text, Card} from '../../atoms';
import {Gradient} from '../../assets';
import MaterialIcon from 'react-native-vector-icons/Entypo';
import {IDelivery} from './types';

const ImmediateDelivery = ({data, showAll, onPressTitle}: IDelivery) => {
  return (
    <Gradient colors={['#0443c0', '#00349b']} style={styles.background}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}>
        {data.map((item: any) => {
          return (
            <Card onPress={onPressTitle} style={styles.card}>
              <Text>{item.title}</Text>
            </Card>
          );
        })}
      </ScrollView>
      <View style={styles.deliveryTxt}>
        <Text color={'#fff'} fontSize={20}>
          ۲۴ تا ۴۸ ساعت
        </Text>
        <Text fontWeight={'bold'} color={'#fff'} fontSize={25}>
          تحویل فوری
        </Text>
      </View>
      <View style={styles.showAll}>
        <MaterialIcon size={20} name={'chevron-left'} color={'yellow'} />
        <Text onPress={showAll} fontWeight={'bold'} color={'#fff'}>
          نمایش همه
        </Text>
      </View>
    </Gradient>
  );
};
export default ImmediateDelivery;
