import { IUser } from './user';

export interface IProduct {
    title: string;
    price: number;
    description: string;
    image: string;
    id: string;
    likes: IUser[];
    dislikes: IUser[];
    comments: [];
    createdAt: string;
    qty: number;
}
