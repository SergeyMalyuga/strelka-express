import { Component } from '@angular/core';
import {DeliveryServicesComponent} from '../../features/delivery-services/delivery-services.component';
import {News} from '../../features/news/news';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    DeliveryServicesComponent,
    News
  ]
})
export class MainComponent {}
