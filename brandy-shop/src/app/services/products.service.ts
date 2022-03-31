import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, query, orderBy, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public fbs: Firestore) { }

  getProducts(): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy');
    return collectionData(productRef, { idField: 'id' }) as Observable<IProduct[]>;
  }

  getLastProducts(): Observable<IProduct[]> {
    let productRef = collection(this.fbs, 'brandy');
    let queryString = query(productRef, orderBy("createdAt", "desc"), limit(3));
    return collectionData(queryString, { idField: 'id' }) as Observable<IProduct[]>;
  }

  getProduct(id: string): Observable<IProduct> {
    let productDocRef = doc(this.fbs, 'brandy', id);
    return docData(productDocRef, { idField: 'id' }) as Observable<IProduct>;
  }

  createProduct(product: IProduct): void {
    let productRef = collection(this.fbs, 'brandy');
    addDoc(productRef, {
      title: product.title,
      description: product.description,
      price: +product.price,
      image: product.image,
      comments: [],
      likes: [],
      createdAt: Date.now(),
      qty: 1,
    });
  }

  updateProduct(product: IProduct): void {

    let productDocRef = doc(this.fbs, 'brandy', product.id);
    updateDoc(productDocRef, {
      id: product.id,
      title: product.title,
      description: product.description,
      price: +product.price,
      image: product.image
    })
  }

  deleteProduct(id: string): void {
    let productDocRef = doc(this.fbs, 'brandy', id)
    deleteDoc(productDocRef);
  }
}
