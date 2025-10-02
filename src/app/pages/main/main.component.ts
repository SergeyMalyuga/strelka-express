import { Component } from '@angular/core';
import {DeliveryServicesComponent} from '../../features/delivery-services/delivery-services.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    DeliveryServicesComponent
  ]
})
export class MainComponent {}
