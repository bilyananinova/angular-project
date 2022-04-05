import { IProduct } from './product';

export interface IUser {
    "id": string;
    "email": string;
    "likes": IProduct[];
}