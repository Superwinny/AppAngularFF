import { Component, Input } from '@angular/core';
import { RecipeInterface } from '../data.interface';

@Component({
  selector: 'app-kitchen-detail',
  templateUrl: './kitchen-detail.component.html',
  styleUrls: ['./kitchen-detail.component.scss']
})
export class KitchenDetailComponent {
  @Input() order!: (RecipeInterface | undefined);
}
