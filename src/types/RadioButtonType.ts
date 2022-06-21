
export default interface IRadioButton {
    data: object[];
    title?: string;
    onPress: (i: number) => void;
    testID?: string;
    style?: object,
    selectedStyle?: object,
    unselectedStyle?: object,
    titleStyle?: object,
  }