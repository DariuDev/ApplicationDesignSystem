
export default interface BadgeType {
    onPress?:() => void;
    styleBadge?: object;
    testId?:string;
    children?: React.ReactNode;
    visibale?:boolean;
    size?:number;
    top?:number;
    left?:number;
 }