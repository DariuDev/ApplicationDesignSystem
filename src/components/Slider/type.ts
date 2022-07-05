import {  ListRenderItem } from 'react-native';
export interface PropSliderType {
    data: Array<object>;
    // top:number;
    renderItem: ListRenderItem<any> | null | undefined;
    styleSlider?:object;
    children?:React.ReactNode;
    isTopChildren?:boolean;
}