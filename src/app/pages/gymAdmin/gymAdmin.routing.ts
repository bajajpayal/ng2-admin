import { Routes, RouterModule } from '@angular/router';

import { GymAdminComponent } from './gymAdmin.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: GymAdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);