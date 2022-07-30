import React from 'react';
import {View, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import {SvgXml} from 'react-native-svg';
import {Text} from '../../atoms';
import {styles} from './style';
import type {ISearchCard} from './type';
import theme from '../../../constants';
import {malltinaSvg} from '../../../assets';

const SearchCard = ({iconName, placeholder, onPress, testID = "searchOnPress-id"}: ISearchCard) => {
  return (
    <View style={styles.search}>
      <Pressable
        testID= {'searchOnPress-id'}
        onPress={onPress}
        style={({pressed}) => [
          styles.iconsearch,
          {
            backgroundColor: pressed
              ? theme.COLORS.BLUE.DARK
              : theme.COLORS.WHITE,
          },
        ]}>
        <MaterialIcons name={iconName} size={30} color={theme.COLORS.LIGHT} />
      </Pressable>
      <View style={styles.placeholder}>
        <SvgXml style={styles.img} xml={malltinaSvg} />
        <Text testID='placeholder-id' fontWeight={'bold'}>{placeholder}</Text>
      </View>
    </View>
  );
};
export default SearchCard;
