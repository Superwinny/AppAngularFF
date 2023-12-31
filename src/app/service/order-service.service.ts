import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { setDoc, doc, collection}from 'firebase/firestore';
import {collectionData, query  }from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  databaseName: string = 'recipeorder';


  constructor(
    private readonly _fireStore: Firestore
  ) {

  }

  async saveData(data: {recipe: {recipeId: string; quantity: number}[], dateTime: Date}){

    const docRef = doc(this._fireStore, this.databaseName + '/' + Date.now());
    await setDoc(docRef, data)
  }
  // async deleteOrder(){

  //   const docRef = doc(this._fireStore, this.databaseName + '/');
  //   await deleteDoc(docRef)
  // }

  loadData(){
    const colRef = collection(this._fireStore, 'recipeorder');
    const q = query(colRef);
    return collectionData(q, {idField: 'id'})
  }
}
