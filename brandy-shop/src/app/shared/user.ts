import { IProduct } from './product';

export interface IUser {
    "id": string;
    "name": string;
    "email": string;
    "likes": IProduct[];
}