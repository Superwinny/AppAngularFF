import { Component, Inject } from '@angular/core';
import { Auth, authState,GoogleAuthProvider, signOut, signInWithPopup } from '@angular/fire/auth';
import {OrderServiceService} from '../service/order-service.service';
import { Observable, of, switchMap } from 'rxjs';
import { APIService } from '../service/api.service';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {

  user$ = authState(this._auth as any);
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
    private readonly _firebaseService: OrderServiceService,
    @Inject('APIService') private readonly _apiService: APIService
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

    break;
    case type === 'display-detail':
    console.log(payload);
    const apiData = await this._apiService.getRecipes();
    break;

    default:
    break;
  }
}

}

