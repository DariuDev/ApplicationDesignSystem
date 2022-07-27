type TypeItem = {
  item: any;
  onPressItem?:()=>void;
  index?:number;
}
type TypeStyleCustomItem = {
  index: number;
  column: number;
  data: Array<object>;

}
export interface ILayout {
  column: number,
  data: Array<object>
  styleRow?: object;
  styleLayout?: object;
  colorBorder?: string;
  widthBorder?: number;
  ItemNode: ({ item,onPressItem, index }: TypeItem) => JSX.Element;
  onPressItem?:()=>void;
  styleItemModule?: ({ index, column, data }: TypeStyleCustomItem) => object | undefined;
  testID?:string;
}
