import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {ILayot} from './type';
import {styles} from './style';
const {width, height} = Dimensions.get('screen');

const Layout = ({
  column,
  data,
  styleRow,
  styleLayout,
  ItemNode,
  onPressItem,
  colorBorder,
  widthBorder,
}: ILayot) => {
  let lenghtData = data.length;

  const styleBorderItem = (index: number) => {
    if (column === 3 && lenghtData === 9) {
      if (index === 5) {
        return {
          borderTopColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderLeftWidth: widthBorder,
          borderTopWidth: widthBorder,
        };
      }
      if (index === 6) {
        return {borderRightColor: colorBorder, borderRightWidth: widthBorder};
      }
      if (index === 8) {
        return {borderLeftColor: colorBorder, borderLeftWidth: widthBorder};
      }
      if (index === 1 || index === 4) {
        return {borderBottomColor: colorBorder, borderBottomWidth: widthBorder};
      }
      if (index === 2) {
        return {
          borderBottomColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderLeftColor: colorBorder,
          borderLeftWidth: widthBorder,
        };
      }
      if (
        index !== 4 &&
        index !== 1 &&
        index !== 2 &&
        index !== 5 &&
        index !== 6 &&
        index !== 7 &&
        index !== 8
      ) {
        return {
          borderBottomColor: colorBorder,
          borderRightColor: colorBorder,
          borderBottomWidth: widthBorder,
          borderRightWidth: widthBorder,
        };
      }
    }
    if (column === 2 && lenghtData === 4) {
      if (index === 0) {
        return {borderBottomColor: colorBorder, borderBottomWidth: widthBorder};
      }
      if (index === 1) {
        return {
          borderLeftColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftWidth: widthBorder,
          borderBottomWidth: widthBorder,
        };
      }
      if (index === 3) {
        return {borderLeftColor: colorBorder, borderLeftWidth: widthBorder};
      }
    } else if (column === 2 && lenghtData === 6) {
      if (index === 0 || index === 2) {
        return {borderBottomColor: colorBorder, borderBottomWidth: widthBorder};
      }
      if (index === 1 || index === 3) {
        return {
          borderLeftColor: colorBorder,
          borderBottomColor: colorBorder,
          borderLeftWidth: widthBorder,
          borderBottomWidth: widthBorder,
        };
      }
      if (index === 5) {
        return {borderLeftColor: colorBorder, borderLeftWidth: widthBorder};
      }
    }
  };

  if (lenghtData % column === 0) {
    return (
      <View style={[styles.layout, {...styleLayout}]} testID="layout-test">
        {data.map((item: any, index) => {
          return (
            <View
              testID={`layout-row-test${item._id}`}
              style={[
                styles.rowCloumn,
                {
                  width: width / (column / 10 + column),
                  ...styleBorderItem(index),
                  ...styleRow,
                },
              ]}
              key={item._id}>
              <ItemNode item={item} onPressItem={onPressItem} />
            </View>
          );
        })}
      </View>
    );
  } else {
    return null;
  }
};

export default Layout;
