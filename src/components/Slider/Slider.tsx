import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, FlatListProps } from 'react-native';
import styles from './style';
import { PropSliderType } from './type';


const Slider = ({ isTopChildren , data, renderItem, styleSlider, children, ...otherProps }:PropSliderType & FlatListProps<any>) => {

  
    return (
        <View style={ { ...styleSlider }} testID="flat-list">
            {isTopChildren!==null && !isTopChildren && children}
            <FlatList
                data={data}
                horizontal={true}
                // style={{ marginEnd: 20}}
                showsHorizontalScrollIndicator={false}
                // pagingEnabled={true}
                keyExtractor={p => p._id}
                renderItem={renderItem}
                {...otherProps}
            />
            {isTopChildren!==null && isTopChildren && children}
        </View>
    )
}
export default Slider;
