 interface ICard {
  onPress?: () => void;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  children?: JSX.Element;
  testID?:string;
}
export default ICard;
