export default interface ITextInput {
  onChangeText: (i : string) => void;
  value: string;
  placeholder?: string;
  style?: object;
  testID?: string;
}
