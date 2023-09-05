import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private readonly Http : HttpClient
  ) { }


   async getRecipes(){

    const url = `./assets/resto-data.json`
    const resquest = this.Http.get(url);
    const response = await firstValueFrom(resquest)
    return response
  }

  sendOrder(){}
}
