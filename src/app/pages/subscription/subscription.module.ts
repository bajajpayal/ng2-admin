import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
//import { Ui } from '../ui/ui.component';
import { AppTranslationModule } from '../../app.translation.module';
//  import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { subscriptionComponent } from './subscription.component';
import { routing } from './subscription.routing';
import { DataTableModule } from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    AppTranslationModule,
    NgaModule,
    DataTableModule,
    NgbDropdownModule,
    NgbModalModule,
  ],
  declarations: [
    subscriptionComponent
  ]
})
export class subscriptionModule {}