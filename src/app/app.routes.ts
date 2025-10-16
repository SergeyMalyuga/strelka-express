import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Логистика для ваших грузов с услугами фулфилмента от StrelkaExpress.',
    loadComponent: () => import('./pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'policy',
    title:
      'Политика конфиденциальности — Логистика для ваших грузов с услугами фулфилмента от StrelkaExpress',
    loadComponent: () => import('./pages/policy/policy.component').then((m) => m.PolicyComponent),
  },
];
