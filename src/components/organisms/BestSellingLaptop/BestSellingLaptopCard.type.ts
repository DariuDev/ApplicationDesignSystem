export interface IBestSellingLaptopCard {
    item: {
        _id:string,
        OfferImage?: string;
        title?: string;
        off?: string;
        price?: string;
        mainPrice?: string;
    };
    onPressItem?: () => void;
    index?:number;
}