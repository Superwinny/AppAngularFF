import { Component } from '@angular/core';
import { Auth, authState,GoogleAuthProvider, signOut, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {

  user$ = authState(this._auth as any)

  constructor(
    private readonly _auth: Auth,
  ){}


async actions(type: string, payload?: any){
  switch(true){
    case type === 'singnin':
    const provider = new GoogleAuthProvider();
    const result = signInWithPopup(this._auth, provider);
    console.log(result);

    break;
    case type === 'singnout':
    await signOut(this._auth);
    console.log('user out');

    break;

    default:
    break;
  }
}

}

