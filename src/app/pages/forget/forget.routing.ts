import { Routes, RouterModule } from '@angular/router';

import { ForgetComponent } from './forget.component';
import { ModuleWithProviders } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: ForgetComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);