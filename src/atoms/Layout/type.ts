interface TypeCategories{
    item: {
      _id:string,
      title:string,
      img:string
    }
  }

export interface  LayotType{
    column: number,
    data:Array<object>
    styleRow?:object;
    styleLayout?:object;
    colorBorder?:string;
    widthBorder?:number;
    ItemNode:({item}:TypeCategories)=> JSX.Element;
}
