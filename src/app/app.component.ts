import { Component } from '@angular/core';
import { OrderServiceService } from './service/order-service.service';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppAngularFF';


  constructor(
    private readonly _fireStoreService : OrderServiceService,
    private readonly _authservice: AuthService,
  ){

  }
}
