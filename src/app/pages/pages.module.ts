import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { DefaultModal } from './ui/components/modals/default-modal/default-modal.component';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, 
      AppTranslationModule,
      NgaModule,
      routing,
      Ng2SmartTableModule,
      DataTableModule,
      FormsModule
    ],
  declarations: 
  [
    Pages,
    DefaultModal
  ],
  entryComponents: [
    DefaultModal
  ],
})
export class PagesModule {
}
