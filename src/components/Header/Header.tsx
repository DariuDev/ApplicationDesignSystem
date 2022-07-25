import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import SearchCard from '../SearchCard';
import {styles} from './style';
import {IHeader} from './type';
import {getFlagEmoji} from './../../utils/getFlagEmoji';

const Header = <T extends Record<any, unknown>>({
  testID,
  onPress,
  ...otherProps
}: IHeader & T) => {
  return (
    <View testID="header-id" style={[styles.header, {...otherProps}]}>
      <StatusBar backgroundColor={'#061d72'} />
      <SearchCard
        testID="searchOnPress-id"
        onPress={onPress}
        iconName={'search1'}
        placeholder={'جستجو در'}
      />
      <View style={styles.contentCountry}>
        <Text style={styles.txtCountry}>
          {getFlagEmoji('AE')} خرید از امارات
        </Text>
        <Text style={styles.txtCountry}>
          {getFlagEmoji('TR')} خرید از ترکیه
        </Text>
      </View>
    </View>
  );
};
export default Header;
