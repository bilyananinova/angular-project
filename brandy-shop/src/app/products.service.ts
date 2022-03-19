import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from './shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fbs: Firestore) { }

  getProducts(): Observable<IProduct[]> {
    const recipesRef = collection(this.fbs, 'users');
    return collectionData(recipesRef, { idField: "id" }) as Observable<IProduct[]>;
  }
}
