import { IProduct } from './product';

export interface IUser {
    "id": string;
    "name": string;
    "email": number;
    "likes": IProduct[];
}