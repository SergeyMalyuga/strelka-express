import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('strelka-express');
}
