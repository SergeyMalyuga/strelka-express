import { Component, signal, WritableSignal } from '@angular/core';
import { DeliveryServicesComponent } from '../../features/delivery-services/delivery-services.component';
import { NewsComponent } from '../../features/news/news.component';
import { FulfillmentComponent } from '../../features/fulfillment/fulfillment.component';
import { TariffsComponent } from '../../features/tariffs/tariffs.component';
import { DeliveryOrderComponent } from '../../features/delivery-order/delivery-order.component';
import { OrderNowComponent } from '../../features/order-now/order-now.component';
import { PromoComponent } from '../../features/promo/promo.component';
import { ReviewsComponent } from '../../features/reviews/reviews.component';
import { QuestionsComponent } from '../../features/questions/questions.component';
import { ContactsComponent } from '../../features/contacts/contacts.component';
import { FooterComponent } from '../../features/footer/footer.component';
import { AppSelectService } from './directives/select-service-input.directive';
import { AppSelectServiceLabel } from './directives/select-service-label.directive';
import { ScrollUpDirective } from './directives/scroll-up.directive';
import { RouterLink } from '@angular/router';
import { AppRoute } from '../../core/consts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    DeliveryServicesComponent,
    NewsComponent,
    FulfillmentComponent,
    TariffsComponent,
    DeliveryOrderComponent,
    OrderNowComponent,
    PromoComponent,
    ReviewsComponent,
    QuestionsComponent,
    ContactsComponent,
    FooterComponent,
    AppSelectService,
    AppSelectServiceLabel,
    ScrollUpDirective,
    RouterLink,
  ],
})
export class MainComponent {
  public readonly AppRoute = AppRoute;
  private selectedServices: WritableSignal<Set<string>> = signal<Set<string>>(new Set());

  onServicesSelected(service: string): void {
    this.selectedServices.update((services) => {
      const newServices = new Set(services);
      if (newServices.has(service)) {
        newServices.delete(service);
      } else {
        newServices.add(service);
      }
      return newServices;
    });
  }
}
