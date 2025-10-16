import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoute } from '../../core/consts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly AppRoute = AppRoute;
}
