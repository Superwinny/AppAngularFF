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

@Input() recipe!: RecipeInterface;
@Output() recipeEvent: EventEmitter<{
  type: actionType;
  payload: RecipeInterface;
  }> = new EventEmitter();

actions(type: actionType, payload: RecipeInterface ){
this.recipeEvent.emit({type, payload})

}

}
