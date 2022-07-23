type TypeCategories={
    item: any;
    onPressItem?:()=>void
  }

export interface  ILayot{
    column: number,
    data:Array<object>
    colorBorder?:string;
    widthBorder?:number;
    index:number;
}
