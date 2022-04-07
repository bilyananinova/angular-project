import { IProduct } from "./product";

export interface ICart {
    products: IProduct[];
    totalPrice: number;
    qty: number;
}