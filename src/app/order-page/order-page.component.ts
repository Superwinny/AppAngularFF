import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { RecipeInterface, RestoCategoryInterface } from '../data.interface';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

recipesCategories!: RestoCategoryInterface[];
orderForm!: FormGroup;

constructor(
  private readonly _ApiService : APIService
){

}
 async ngOnInit() {
  const recipesCategories = await this._ApiService.getRecipes();
  this.recipesCategories = recipesCategories;
  this.orderForm = new FormGroup({
    recipes: new FormArray([]),
    dateTime: new FormControl()
});

}

private _addRecipeToForm(recipeId: string, quantity: number){
  // Build group element whith RecipeId and Quantity
  const group = new FormGroup({
    recipeId: new FormControl("", Validators.compose([
   Validators.required
 ])),
 quantity: new FormControl('', Validators.compose([
   Validators.required
 ])),
});
//get form Array Control to add selected recipe
const formArray = this.orderForm?.get('recipes') as FormArray;
//add recipe to arra form
formArray.push(group);
//display result in console
console.log((this.orderForm.value));
}

actions($event: {type: string; payload: RecipeInterface}){
  console.log($event);
  this._addRecipeToForm($event.payload.uuid, 1)
}

}
