export interface IGridListCard{
    item: {
        _id:string,
        image?: string;
    };
    onPressItem?: () => void;
}