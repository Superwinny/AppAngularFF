import { Component, Input } from '@angular/core';
import { RecipeInterface } from '../data.interface';

type actionType = 'add' | 'remove';

@Component({
  selector: 'app-recipe-element',
  templateUrl: './recipe-element.component.html',
  styleUrls: ['./recipe-element.component.scss']
})
export class RecipeElementComponent {
@Input() recipe!: RecipeInterface;

actions(type: actionType, payload: RecipeInterface ){
console.log({type,payload});

}

}
