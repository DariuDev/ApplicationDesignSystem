import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {styles} from './style';
import type {IHeader} from './type';
import {SearchCard} from '../../molecules';
import theme from '../../../constants';
import {FlagEmoji} from '../../../utils';

const Header = <T extends Record<any, unknown>>({
  onPress,
  ...otherProps
}: IHeader & T) => {
  return (
    <View testID="header-id" style={[styles.header, {...otherProps}]}>
      <StatusBar backgroundColor={theme.COLORS.BLUE.PRIMARY} />
      <SearchCard
        testID="searchOnPress-id"
        onPress={onPress}
        iconName={'search1'}
        placeholder={'جستجو در'}
      />
      <View style={styles.contentCountry}>
        <Text style={styles.txtCountry}>{FlagEmoji('AE')} خرید از امارات</Text>
        <Text style={styles.txtCountry}>{FlagEmoji('TR')} خرید از ترکیه</Text>
      </View>
    </View>
  );
};
export default Header;
