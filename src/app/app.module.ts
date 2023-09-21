import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeElementComponent } from './recipe-element/recipe-element.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { KitchenComponent } from './kitchen/kitchen.component';
import { IonicModule } from '@ionic/angular';
import { KitchenDetailComponent } from './kitchen-detail/kitchen-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    RecipeElementComponent,
    KitchenComponent,
    KitchenDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
