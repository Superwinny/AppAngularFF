import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

constructor(
  private readonly ApiService : APIService
){

}
 async ngOnInit() {

  const data =  await  this.ApiService.getRecipes();

  console.log(data);


}

}
