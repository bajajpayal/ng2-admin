import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { user_service } from '../../userService/user_service';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private userservice: user_service, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      const data = {
        email : this.form.value.email,
        password : this.form.value.password,
      };
      this.userservice.login(data).subscribe(
        (result)=>
        {
          console.log(result);
          if(result.status === 'success')
            {
              console.log('logged in');
              localStorage.setItem('token',result.result.token);
              this.router.navigate(['pages']);

            }
        }
      );

      // your code goes here
      // console.log(values);
    }
  }
}
