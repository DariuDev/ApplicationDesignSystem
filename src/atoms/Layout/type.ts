type TypeCategories={
    item: any;
    onPressItem?:()=>void
  }

export interface  ILayot{
    column: number,
    data:Array<object>
    styleRow?:object;
    styleLayout?:object;
    colorBorder?:string;
    widthBorder?:number;
    ItemNode:({item,onPressItem}:TypeCategories)=> JSX.Element;
   onPressItem?:()=>void;
}
