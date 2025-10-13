import { Component } from '@angular/core';
import { DeliveryServicesComponent } from '../../features/delivery-services/delivery-services.component';
import { NewsComponent } from '../../features/news/news.component';
import { FulfillmentComponent } from '../../features/fulfillment/fulfillment.component';
import { TariffsComponent } from '../../features/tariffs/tariffs.component';
import { DeliveryOrderComponent } from '../../features/delivery-order/delivery-order.component';
import { OrderNowComponent } from '../../features/order-now/order-now.component';
import { PromoComponent } from '../../features/promo/promo.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    DeliveryServicesComponent,
    NewsComponent,
    FulfillmentComponent,
    TariffsComponent,
    DeliveryOrderComponent,
    OrderNowComponent,
    PromoComponent,
  ],
})
export class MainComponent {}
