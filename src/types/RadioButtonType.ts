
export default interface IRadioButton {
    data: object[];
    title?: string;
    onPress: (i: number) => void;
    style?: object,
    selectedStyle?: object,
    unselectedStyle?: object,
    titleStyle?: object,
  }