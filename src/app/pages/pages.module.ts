import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing,Ng2SmartTableModule],
  declarations: [Pages,DefaultModal],
  entryComponents: [
    DefaultModal
  ],
})
export class PagesModule {
}
