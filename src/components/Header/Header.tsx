import React from 'react';
import {View, StatusBar} from 'react-native';
import SearchCard from '../SearchCard';
import {styles} from './style';
import {IHeader} from './type';

const Header = <T extends Record<any, unknown>>({onPress, ...otherProps} : IHeader & T) => {
  return (
    <View
      style={[styles.header, {...otherProps}]}>
      <StatusBar backgroundColor={'#061d72'} />
      <SearchCard onPress={onPress} iconName={'search'} placeholder={'جستجو در'} />
    </View>
  );
};
export default Header;
