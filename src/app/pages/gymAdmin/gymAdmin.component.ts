import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { user_service } from '../../userService/user_service';
import { Router } from "@angular/router";
import { LocalDataSource } from 'ng2-smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';

@Component({
  selector: 'gymAdmin',
  templateUrl: './gymAdmin.html',
  styleUrls: ['./gymAdmin.scss']
})
export class gymAdminComponent {
  data;
  limit;
  filter;
  
  rowsOnPage = 5;
  sortBy = "name";
  sortOrder = "asc";

  constructor( private userservice: user_service, private router: Router,private modalService: NgbModal) {
    this.userservice.getAllGyms().subscribe((data)=>
    {
      console.log(data.result,"getallgymm-----------")
      this.data = data.result;
    })
}
  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'User Form';
  }
onEnter(v:string)
{
  this.filter = v;
  console.log(this.filter);
  this.userservice.getAllGyms().subscribe((data)=>
  {
    console.log(data.result.gym_data,"getallgymm-----------")
    this.data = data.result.gym_data;
  })
}

remove(item)
{
  console.log(item);
}

// onChange(deviceValue) {
//   console.log(deviceValue);
//   console.log(parseInt(deviceValue));
//   this.userservice.getAllGyms().subscribe((data)=>
//   {
//     console.log(data.result.gym_data,"getallgymm-----------")
//     this.data = data.result.gym_data;
//   })
// };
onChangeSort(value)
{
  console.log(value); 
}

}