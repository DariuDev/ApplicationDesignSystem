import {  ListRenderItem } from 'react-native';
export interface PropSliderType {
    values: Array<object>;
    // top:number;
    renderItem: ListRenderItem<any> | null | undefined;
    styleSlider?:object;
    // title?: string;
}