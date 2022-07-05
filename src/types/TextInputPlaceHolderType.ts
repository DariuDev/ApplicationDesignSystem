import { TextStyle } from 'react-native';
// export default interface ITextInput<T extends Record<string, unknown>> {
    export default interface ITextInput {
    // onChangeText: (i:string ) => void;
    // value: string;
    placeholder?: string;
    // styleIn?: T ;
    styleIn?: object;
    styleOut?: object;
    testID?: string;
    iconName?: string;
    sizeIcon?:number;
    colorIcon?: string;
    Children?: React.ReactNode;
}
