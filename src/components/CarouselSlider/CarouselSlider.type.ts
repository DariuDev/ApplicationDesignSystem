import  type{ ListRenderItem } from "react-native";
export interface ICarouselSlider {
  IsPagination?: boolean;
  dotStylePagination?: {};
  data: object[];
   renderItem: ListRenderItem<object>;
  itemWideth?: number;
}