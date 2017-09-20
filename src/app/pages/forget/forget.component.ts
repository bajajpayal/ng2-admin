import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { user_service } from '../../userService/user_service';
import { Router } from "@angular/router";

// for modal

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';

@Component({
  selector: 'forget',
  templateUrl: './forget.html',
  styleUrls: ['./forget.scss']
})
export class ForgetComponent {
  public form: FormGroup;
  public email: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private userservice: user_service, private router: Router, private modalService: NgbModal) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
}
public onSubmit(values: Object): void {
  this.submitted = true;
  if (this.form.valid) {
    const data = {
      email : this.form.value.email,
      role : 1  
    };
    this.userservice.forget(data).subscribe(
      (result)=>
      {
        console.log(result);
        if(result.status === 'success')
          {
            console.log('logged in');
            const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
            activeModal.componentInstance.modalHeader = 'Success';
            activeModal.componentInstance.modalContent = `Reset password link has been sent to your registered email address.`;
            this.router.navigate(['login']);

          }
          else{
              
          }
      }
    );

    // your code goes here
    // console.log(values);
  }
}
}