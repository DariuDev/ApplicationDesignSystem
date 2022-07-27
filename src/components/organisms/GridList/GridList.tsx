import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import type { IGridList, IGridListCard } from '.';
import { Layout } from '../../atoms';

const GridList = ({ data, onPressItem }: IGridList) => {
  return (
    <View>
      <Layout testID='layout-id' styleLayout={styles.layout}
        styleRow={styles.itemLayout}
        onPressItem={onPressItem}
        column={2} data={data}
        ItemNode={({ item, onPressItem }: IGridListCard) =>
        (<View>
          {/* <Image style={{width:50,height:50,resizeMode:'stretch'}} source={require('../../../assets/image/imageSlider.png')} /> */}
        </View>
        )}
      />
    </View>
  );
};
export default GridList;
