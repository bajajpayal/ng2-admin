import { Routes, RouterModule } from '@angular/router';

import { gymAdminComponent } from './gymAdmin.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: gymAdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);