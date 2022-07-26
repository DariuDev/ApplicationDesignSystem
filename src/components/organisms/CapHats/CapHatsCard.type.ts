export interface ICapHatsCard {
    item: {
        _id:string,
        productImage?: string;
        title?: string;
        off?: string;
        price?: string;
        mainPrice?: string;
    };
    onPressItem?: () => void;
}