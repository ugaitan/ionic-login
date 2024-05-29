import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore'

import { Observable, subscribeOn } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  leeUsuario(){
    this.firestore.collection('usuario').valueChanges().subscribe((res) =>
      {
        console.log(res)
      });
  }

}
