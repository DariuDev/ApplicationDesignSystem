export interface SliderCategoriesType {
    item: {
        title: string;
        img: string;
        id:string;
    };
    index:number;
    onPress?:()=>{};
}