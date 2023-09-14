import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { RecipeInterface, RestoCategoryInterface } from '../data.interface';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

recipesCategories!: RestoCategoryInterface[];
orderForm!: FormGroup;

constructor(
  private readonly _ApiService : APIService,
  private readonly orderservice: OrderServiceService,

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

//get form Array Control to add selected recipe
const formArray = this.orderForm?.get('recipes') as FormArray;

const index = formArray.value.findIndex(
(r:{recipeId: string; quantity: number;}) => r.recipeId === recipeId
);
if(index >= 0){
  const quantityControler = formArray.at(index).get('quantity');
  if(quantityControler){
    quantityControler.setValue(quantityControler.value + quantity);
  }
} else{
// Build group element whith RecipeId and Quantity
const group = new FormGroup({
  recipeId: new FormControl("", Validators.compose([
 Validators.required
])),
quantity: new FormControl('', Validators.compose([
 Validators.required
])),
});
//add recipe to arra form
formArray.push(group);
//display result in console
console.log((this.orderForm.value));
}
}



async actions($event: {type: string; payload?: any}) {
  console.log($event);
  switch (true) {
    case $event.type === 'selectCategory':
      console.log($event.type, $event.payload);
      break;
    case $event.type === 'add':
      this._addRecipeToForm($event.payload.uuid, 1);
      break;
    case $event.type === 'remove':

      break;
    case $event.type === 'send-order':
       await this.orderservice.saveData(this.orderForm.value);
      (this.orderForm.get('recipes') as FormArray).clear();
      console.log(this.orderForm.value);
      alert('order sucessfuly send!');
      break;
    default:
      break;
  }
}

}
