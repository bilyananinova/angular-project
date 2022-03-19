import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fbs: Firestore) { }

  getProducts(): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy');
    return collectionData(productRef, { idField: "id" }) as Observable<IProduct[]>;
  }

  getProduct(id: string): Observable<IProduct> {
    let productDocRef = doc(this.fbs, `brandy/${id}`)
    return docData(productDocRef, { idField: 'id' }) as Observable<IProduct>;
  }

}
