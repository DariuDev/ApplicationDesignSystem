import React from 'react';
import {View, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text } from '../../atoms';
import {styles} from './style';

const Search = () => {
return(
<View style={styles.search}>
    <MaterialIcons name='search' size={30}/>
    <View style={styles.placeholder}>
    <Image style={styles.img} source={require('../../assets/malltina.png')}/>
    <Text>جستجو در</Text>
    </View>
</View>
)
}
export default Search;