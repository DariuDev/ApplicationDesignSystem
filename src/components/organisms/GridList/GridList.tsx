import React from 'react';
import { View ,Image} from 'react-native';
import { styles } from './style';
import type { IGridList, IGridListCard } from '.';
import { Card, Layout, Text } from '../../atoms';

const GridList = ({ data, onPressItem }: IGridList) => {
  return (
    <View style={{ alignSelf: 'center' }}>
      <Layout
        styleLayout={styles.layout}
        onPressItem={onPressItem}
        column={2} data={data}
        ItemNode={({ item, onPressItem, index }: any) =>
        (<Card
          testID={`cardGridList-id-${index}`}
          style={styles.cardList}
          onPress={onPressItem}>
          <Text>{item.image}</Text>
          {/* <Image source={require(`${item.image}`)} /> */}
        </Card>
        )}
      />
    </View>
  );
};
export default GridList;
