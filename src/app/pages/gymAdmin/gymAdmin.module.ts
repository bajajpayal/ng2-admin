import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { gymAdminComponent } from './gymAdmin.component';
import { routing } from './gymAdmin.routing';
import { NgaModule } from '../../theme/nga.module';
//import { Ui } from '../ui/ui.component';
import { AppTranslationModule } from '../../app.translation.module';
//  import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { Modals } from '../ui/components/modals/modals.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    Ng2SmartTableModule,
    AppTranslationModule,
    NgaModule,
    DataTableModule,
    NgbDropdownModule,
    NgbModalModule,
  ],
  declarations: [
    gymAdminComponent
  ]
})
export class gymAdminModule {}