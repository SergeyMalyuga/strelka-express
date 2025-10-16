import { Routes } from '@angular/router';
import { AppRoute } from './core/consts';

export const routes: Routes = [
  {
    path: AppRoute.MAIN,
    title: 'Логистика для ваших грузов с услугами фулфилмента от StrelkaExpress.',
    loadComponent: () => import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: AppRoute.POLICY,
    title:
      'Политика конфиденциальности — Логистика для ваших грузов с услугами фулфилмента от StrelkaExpress',
    loadComponent: () => import('./pages/policy/policy.component').then((m) => m.PolicyComponent),
  },
];
