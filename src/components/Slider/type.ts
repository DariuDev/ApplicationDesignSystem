import {  ListRenderItem } from 'react-native';
export interface PropSliderType {
    values: Array<object>;
    // top:number;
    renderItem: ListRenderItem<any> | null | undefined;
    styleSlider?:object;
    children?:React.ReactNode;
    isRightChildren?:boolean;
}