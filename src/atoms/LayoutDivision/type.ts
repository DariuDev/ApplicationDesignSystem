type TypeCategories = {
  item: any;
  onPressItem?: () => void
}
type TypeStyleCustomItem = {
  index: number;
  column: number;
  data: Array<object>;

}
export interface ILayoutDivision {
  column: number,
  data: Array<object>
  styleRow?: object;
  styleLayout?: object;
  colorBorder?: string;
  widthBorder?: number;
  ItemNode: ({ item, onPressItem }: TypeCategories) => JSX.Element;
  onPressItem?: () => void;
  styleItemModule?: ({ index, column, data }: TypeStyleCustomItem) => object | undefined;
}
