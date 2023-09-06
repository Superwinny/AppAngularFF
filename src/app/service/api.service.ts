import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { RestoInterface } from '../data.interface';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private readonly _Http : HttpClient
  ) { }


   async getRecipes(){

    const url = `./assets/resto-data.json`
    const resquest = this._Http.get<RestoInterface>(url);
    const response = await firstValueFrom(resquest)
    return response.data
  }

  sendOrder(){}
}
