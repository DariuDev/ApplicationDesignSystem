import { ILayotBorder } from './layoutBorder.type';

const layout = ({
  column,
  data,
  colorBorder = '#edf0f5',
  widthBorder = 1,
  index
}: ILayotBorder) => {
  let lenghtData = data.length;

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
      return { borderRightColor: colorBorder, borderRightWidth: widthBorder };
    }
    if (index === 8) {
      return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
    }
    if (index === 1 || index === 4) {
      return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
    }
    if (index === 2) {
      return {
        borderBottomColor: colorBorder,
        borderBottomWidth: widthBorder,
        borderLeftColor: colorBorder,
        borderLeftWidth: widthBorder,
      };
    }
    if (index !== 4 && index !== 1 && index !== 2 && index !== 5 && index !== 6 && index !== 7 && index !== 8) {
      return {
        borderBottomColor: colorBorder,
        borderRightColor: colorBorder,
        borderBottomWidth: widthBorder,
        borderRightWidth: widthBorder,
      };
    }
  }
  else if (column === 2 && lenghtData === 4) {
    if (index === 0) {
      return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
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
      return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
    }
  } else if (column === 2 && lenghtData === 6) {
    if (index === 0 || index === 2) {
      return { borderBottomColor: colorBorder, borderBottomWidth: widthBorder };
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
      return { borderLeftColor: colorBorder, borderLeftWidth: widthBorder };
    }
  }
  else {
    return undefined;
  }
};

export default layout;
