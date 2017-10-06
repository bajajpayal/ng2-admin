import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { user_service } from '../../userService/user_service';
import { Router } from "@angular/router";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.html',
  styleUrls: ['./subscription.scss']
})
export class subscriptionComponent {
  data;
  constructor(private userservice: user_service, private router: Router) {
    this.userservice.getAllSubscriptionPlan().subscribe((data)=>
  {
    
    console.log(data.result.subscription_plan_data,"data resultttttttttt");
    this.data = data.result.subscription_plan_data;
  })
  }
}