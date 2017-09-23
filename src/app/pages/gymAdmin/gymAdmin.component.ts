import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { user_service } from '../../userService/user_service';
import { Router } from "@angular/router";
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'gymAdmin',
  templateUrl: './gymAdmin.html',
  styleUrls: ['./gymAdmin.scss']
})
export class GymAdminComponent {
  data;
  limit;
  
  rowsOnPage = 5;
  sortBy = "name";
  sortOrder = "asc";

  constructor( private userservice: user_service, private router: Router) {
    this.userservice.getAllGyms(10).subscribe((data)=>
    {
      console.log(data.result.gym_data,"getallgymm-----------")
      this.data = data.result.gym_data;
    })
}
onChange(deviceValue) {
  console.log(deviceValue);
  console.log(parseInt(deviceValue));
  this.userservice.getAllGyms(deviceValue).subscribe((data)=>
  {
    console.log(data.result.gym_data,"getallgymm-----------")
    this.data = data.result.gym_data;
  })
};
onChangeSort(value)
{
  console.log(value); 
}

}