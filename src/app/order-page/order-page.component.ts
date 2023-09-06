import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { RestoCategoryInterface } from '../data.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

recipesCategories!: RestoCategoryInterface[];

constructor(
  private readonly _ApiService : APIService
){

}
 async ngOnInit() {
  const recipesCategories = await this._ApiService.getRecipes();
  this.recipesCategories = recipesCategories;

}

}
