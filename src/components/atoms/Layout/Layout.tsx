import React from 'react';
import { View, Dimensions } from 'react-native';
import type { ILayout } from './Layout.type';
import { styles } from './style';

const { width } = Dimensions.get('screen');
const Layout = ({
    column,
    data,
    styleRow,
    styleLayout,
    ItemNode,
    onPressItem,
    styleItemModule,
    testID='layout-test'
 }: ILayout) => {

    let lenghtData = data.length;
    if (lenghtData % column === 0) {
        return (
            <View style={[styles.layout, { ...styleLayout }]} testID={testID}>
                {data.map((item: any, index) => {
                    return <View testID={`layout-row-test${item._id}`}
                        style={[
                            styles.rowCloumn,
                            styleItemModule ? styleItemModule({ index, column, data }) : {},
                            {
                                width: width / (column / 10 + column),
                                ...styleRow
                            }]}
                        key={item._id}>
                        <ItemNode item={item} index={index} onPressItem={onPressItem} />
                    </View>
                }
                )}
            </View>
        );
    }
    else {
        return null
    }
}

export default Layout;

