import { IProduct } from './product';

export interface IUser {
    "name": string;
    "email": number;
    "likes": IProduct[];
}