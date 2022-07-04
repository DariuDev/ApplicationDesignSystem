import React from 'react';
import {View, Image, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from '../../atoms';
import {styles} from './style';
import {ISearchCard} from './type';

const SearchCard = ({iconName, placeholder, onPress}: ISearchCard) => {
  return (
    <View style={styles.search}>
      <Pressable onPress={onPress}>
        <MaterialIcons name={iconName} size={30} />
      </Pressable>
      <View style={styles.placeholder}>
        <Image
          style={styles.img}
          source={require('../../assets/malltina.png')}
        />
        <Text fontWeight={'bold'}>{placeholder}</Text>
      </View>
    </View>
  );
};
export default SearchCard;
