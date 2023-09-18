import { Component, Inject } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signOut, signInWithPopup } from '@angular/fire/auth';
import { OrderServiceService } from '../service/order-service.service';
import { Observable, of, switchMap } from 'rxjs';
import { APIService } from '../service/api.service';
import { RecipeInterface } from '../data.interface';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {

  user$ = authState(this._auth as any);
  data$: Observable<any[]> = this.user$.pipe(
    switchMap((user) => {
      if (user) {
        return this._firebaseService.loadData();
      } else {
        return of();
      }
    })
  );

  constructor(
    private readonly _auth: Auth,
    private readonly _firebaseService: OrderServiceService,
   private readonly _apiService: APIService
  ) { }


  async actions(type: string, payload?: any) {

    switch (true) {
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
        const order = payload as { recipes: { recipeId: string }[] }
        const orderDetail = await Promise.all(order.recipes.map(async ({ recipeId }) => {
          const recipe = await this._apiService.getRecipeById(recipeId);
          return recipe;
        }));
        console.log('>>', orderDetail);
        break;
      default:
        break;
    }
  }

}

