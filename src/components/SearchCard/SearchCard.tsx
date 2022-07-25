import React from 'react';
import {View, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import {SvgXml} from 'react-native-svg';
import {Text} from '../../atoms';
import {styles} from './style';
import {ISearchCard} from './type';
import {malltinaSvg} from '../../assets';

const SearchCard = ({iconName, placeholder, onPress}: ISearchCard) => {
  return (
    <View testID="searchCard-id" style={styles.search}>
      <Pressable
        testID="searchOnPress-id"
        style={({pressed}) => [
          styles.iconsearch,
          {backgroundColor: pressed ? '#e4e4e4' : '#fff'},
        ]}
        onPress={onPress}>
        <MaterialIcons name={iconName} size={30} color={'gray'} />
      </Pressable>
      <View style={styles.placeholder}>
        <SvgXml style={styles.img} xml={malltinaSvg} />
        <Text testID="searchPlaceHolder-id" fontWeight={'bold'}>
          {placeholder}
        </Text>
      </View>
    </View>
  );
};
export default SearchCard;
