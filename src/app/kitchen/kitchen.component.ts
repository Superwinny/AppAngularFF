import { Component } from '@angular/core';
import { Auth, authState,GoogleAuthProvider, signOut, signInWithPopup } from '@angular/fire/auth';
import {FirebaseService} from '../services/firebase.service';
import { Observable, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {

  user$ = authState(this._auth as any)
  data$: Observable<any[]> = this.user$.pipe(
    switchMap((user) => {
      if(user){
        return this._firebaseService.loadData();
      }else{
        return of();
      }
    })
  );


  constructor(
    private readonly _auth: Auth,
    private readonly _firebaseService: FirebaseService
  ){}


async actions(type: string, payload?: any){

  switch(true){
    case type === 'signin':
    const provider = new GoogleAuthProvider();
    const result = signInWithPopup(this._auth, provider);
    console.log(result);

    break;
    case type === 'signout':
    await signOut(this._auth);
    console.log('user out');

    break;

    default:
    break;
  }
}

}

