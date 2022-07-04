import {StyleProp } from 'react-native';
export default interface ButtonType<StyleProp>{
    onPress?:(event: Object) => void;
    title:string;
    styleText?:StyleProp ;
    styleButton?: object;
    testId?:string;

 }