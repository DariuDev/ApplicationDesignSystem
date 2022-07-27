export interface ICategoriesCard {
    item: {
        _id: string,
        title: string,
        img: string
    };
    onPressItem?: () => void;
    index?:number;
}