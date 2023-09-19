import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeInterface } from '../data.interface';
import { ToastController } from '@ionic/angular';

type actionType = 'add'|'remove';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.scss']
})
export class RecipeElementComponent {


  constructor(
    private readonly _toastController: ToastController
    ) {}

  async presentToast(position:'bottom') {
    const toast = await this._toastController.create({
      message: 'Plat rajouté',
      duration: 1000,
      position: position,
      color:"success"
    });

    await toast.present();
  }
@Input() recipe!: RecipeInterface;
@Output() recipeEvent: EventEmitter<{
  type: actionType;
  payload: RecipeInterface;
  }> = new EventEmitter();

actions(type: actionType, payload: RecipeInterface ){
this.recipeEvent.emit({type, payload})

}

}
