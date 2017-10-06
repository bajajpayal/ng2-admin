import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { subscriptionComponent } from './subscription.component';

const routes: Routes = [
  {
    path: '',
    component: subscriptionComponent
  }
];

export const routing = RouterModule.forChild(routes);