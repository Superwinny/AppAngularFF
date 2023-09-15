import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, signOut } from 'firebase/auth';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {

  constructor(
    private readonly _auth: Auth,
  ){}


async actions(type: string, payload?: any){
  switch(true){
    case type === 'login':
    const provider = new GoogleAuthProvider();
    const result = await singnInWithPopup(this._auth, provider);
    console.log(result);

    break;
    case type === 'logout':
    await signOut
    break;

    default:
    break;
  }
}

}
function singnInWithPopup(_auth: Auth, provider: GoogleAuthProvider) {
  throw new Error('Function not implemented.');
}

