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
  public form: FormGroup;
  public email: AbstractControl;
  public submitted: boolean = false;
  settings = {
    
    add: {
      confirmCreate: true,
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
     
      gymAdminemail: {
        title: 'Admin Email',
        type: 'string'
      },
      gymName: {
        title: 'Gym Name',
        type: 'string'
      },
      address: {
        title: 'Address',
        type: 'string'
      },
      isActive: {
        title: 'Active',
        type: 'string'
      },
      isPaymentRecieved: {
        title: 'isPaymentRecieved',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(fb: FormBuilder, private userservice: user_service, private router: Router) {
    this.userservice.getAllGyms().subscribe((data)=>
    {
      console.log(data.result.gym_data,"getallgymm-----------")
      this.source.load(data.result.gym_data);
      console.log(this.source,"dskdksjbgkdsbgv")
    })
}

onCreateConfirm(event):void{

}

onEditConfirm(event):void{

}

onDeleteConfirm(event): void {
  if (window.confirm('Are you sure you want to delete?')) {
    event.confirm.resolve();
    this.userservice.deleteGym().subscribe((data)=>
  {
    console.log(data,"deltedd gym");
  });
  } else {
    event.confirm.reject();
  }
}
}