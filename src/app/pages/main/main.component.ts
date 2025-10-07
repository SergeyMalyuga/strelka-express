import { Component } from '@angular/core';
import { DeliveryServicesComponent } from '../../features/delivery-services/delivery-services.component';
import { NewsComponent } from '../../features/news/news.component';
import { FulfillmentComponent } from '../../features/fulfillment/fulfillment.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [DeliveryServicesComponent, NewsComponent, FulfillmentComponent],
})
export class MainComponent {}
