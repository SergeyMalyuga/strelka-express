import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoute } from '../../core/consts';
import { RouterLink } from '@angular/router';
import { AppSelectServiceLabel } from '../../pages/main/directives/select-service-label.directive';

@Component({
  selector: 'app-order-now',
  imports: [RouterLink, AppSelectServiceLabel],
  templateUrl: './order-now.component.html',
  styleUrl: './order-now.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderNowComponent {
  protected readonly AppRoute = AppRoute;
}
