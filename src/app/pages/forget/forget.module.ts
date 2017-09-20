import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetComponent } from './forget.component';
import { routing } from './forget.routing';
import { NgaModule } from '../../theme/nga.module';
import { Ui } from '../ui/ui.component';
import { AppTranslationModule } from '../../app.translation.module';
//  import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../ui/components/modals/modals.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AppTranslationModule,
    NgaModule,
    NgbDropdownModule,
    NgbModalModule,
  ],
  declarations: [
    ForgetComponent,
   // DefaultModal,
    Modals,
    Ui
  ],
  // entryComponents: [
  //   DefaultModal
  // ],
})
export class ForgetModule {}