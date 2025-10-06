import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class News {

}
