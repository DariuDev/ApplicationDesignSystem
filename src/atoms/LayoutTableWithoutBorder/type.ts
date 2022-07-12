interface TypeCategories{
    item:object
  }

export interface  LayotType{
    column: number,
    data:Array<object>
    //  [
    //     {
    //         _id: string,
    //         title: string,
    //         img: string,
    //     }
    // ]
    styleRow?:object;
    styleLayout?:object;
    colorBorder?:string;
    widthBorder?:number;
    ItemNode:({item}:TypeCategories)=> JSX.Element;
}
