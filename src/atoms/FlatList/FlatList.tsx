import React, {FC} from 'react';
import {FlatList, FlatListProps} from 'react-native';

const CustomFlatList: FC<FlatListProps<any>> = ({...otherProps}) => (
  <FlatList
    testID="flatlist-ID"
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    {...otherProps}
  />
);
export default CustomFlatList;
