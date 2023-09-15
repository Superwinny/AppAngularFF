import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';
import { KitchenComponent } from './kitchen/kitchen.component';

const routes: Routes = [
  {path: "index", component: OrderPageComponent},
  {path: "kitchen", component: KitchenComponent},
  {path: "",redirectTo:'index', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
