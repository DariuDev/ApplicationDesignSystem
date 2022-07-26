// import type { ListRenderItem } from "react-native";
export interface ISliderCarousel {
  IsPagination?: boolean;
  dotStylePagination?: {};
  data: object[];
  renderItem: any;
  itemWideth?: number;
}