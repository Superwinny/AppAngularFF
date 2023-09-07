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
  const group = new FormGroup({
    recipeId: new FormControl("", Validators.compose([
   Validators.required
 ])),
 quantity: new FormControl('', Validators.compose([
   Validators.required
 ])),
});
const formArray = this.orderForm?.get('recipes') as FormArray;
formArray.push(group);
console.log((this.orderForm.value));
}

actions($event: {type: string; payload: RecipeInterface}){
  console.log($event);
  this._addRecipeToForm($event.payload.uuid, 1)
}

}
