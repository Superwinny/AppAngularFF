import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { RecipeInterface, RestoCategoryInterface } from '../data.interface';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { OrderServiceService } from '../service/order-service.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  recipesCategories!: RestoCategoryInterface[];
  orderForm!: FormGroup;

  constructor(
    private readonly _ApiService: APIService,
    private readonly orderservice: OrderServiceService,
    private readonly _toastController: ToastController,
    private readonly _loadingCtrl: LoadingController

  ) {

  }
  async ngOnInit() {
    const recipesCategories = await this._ApiService.getRecipes();
    this.recipesCategories = recipesCategories;
    this.orderForm = new FormGroup({
      recipes: new FormArray([]),
      dateTime: new FormControl(new Date)
    });

  }
  async presentToast(position:'bottom') {
    const toast = await this._toastController.create({
      message: 'Plat rajouté',
      duration: 1000,
      position: position,
      color:"success"
    });

    await toast.present();
  }
 private async _showLoading() {
    const loading = await this._loadingCtrl.create({
      message: '...',
      duration: 500,
    });
     loading.present();
     return loading;
  }
  private _addRecipeToForm(recipeId: string, quantity: number) {

    //get form Array Control to add selected recipe
    const formArray = this.orderForm.get('recipes') as FormArray;

    const index = formArray.value.findIndex(
      (r: { recipeId: string; quantity: number; }) => r.recipeId === recipeId
    );
    if (index >= 0) {
      const quantityControler = formArray.at(index).get('quantity');
      if (quantityControler) {
        quantityControler.setValue(quantityControler.value + quantity);
      }
    } else {
      // Build group element whith RecipeId and Quantity
      const group = new FormGroup({
        recipeId: new FormControl(recipeId, Validators.compose([
          Validators.required
        ])),
        quantity: new FormControl(quantity, Validators.compose([
          Validators.required
        ])),
      });
      //add recipe to arra form
      formArray.push(group);
      //display result in console

    }
    console.log((this.orderForm.value));
  }



  async actions($event: { type: string; payload?: any }) {
    console.log($event);
    switch (true) {
      case $event.type === 'selectCategory':
        console.log($event.type, $event.payload);
        break;
      case $event.type === 'add':
        const loading = await this._showLoading();
        this._addRecipeToForm($event.payload.uuid, 1);
        await loading.dismiss();
        this.presentToast('bottom');
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
