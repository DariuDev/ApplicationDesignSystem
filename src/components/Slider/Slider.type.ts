import  type{ ListRenderItem } from "react-native";
export interface Islider {
  IsPagination?: boolean;
  dotStylePagination?: {};
  data: object[];
   renderItem: ListRenderItem<object>;
  itemWideth?: number;
}