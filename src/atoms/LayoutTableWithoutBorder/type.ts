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
    // onPress?:()=>{};
    children?: React.ReactNode;
    styleItem?:object;
    styleLayout?:object;
}
