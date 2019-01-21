import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  // ref = firebase.firestore().collection('log');

  constructor() { }

  postBoards(data): Observable<any> {
    return new Observable((observer) => {
      // this.ref.add(data).then((doc) => {
      //   observer.next({
      //     key: doc.id
      //   });
      // });
    });
  }
}
