export interface  LayotType{
    column: number,
    data: [
        {
            _id: string,
            title: string,
            img: string,
        }
    ]
    onPress?:()=>{};
}
