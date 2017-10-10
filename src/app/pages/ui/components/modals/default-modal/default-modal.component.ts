import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user_service } from '../../../../../userService/user_service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html',
})

export class DefaultModal implements OnInit {

  modalHeader: string;
  email : string;
  name : string;
  address: string;
  city: string;
  country: string;

  constructor(private toastr: ToastrService, private activeModal: NgbActiveModal ,private userservice: user_service) {
  
  }

  ngOnInit() {
    this.email = this.email;  
    console.log(this.email)
    this.name = this.name;
    this.address = this.address;
    this.city = this.city;
    this.country = this.country;
    console.log(this.email,this.name,this.address,this.city,this.country,"hellloooooooooo")
  }

  closeModal() {
    this.activeModal.close();
  }

  editGym()
  {
    console.log(this.email,"emailllll");
    let obj ={
      gymId: '59d48bf0b1094b0f9d1d82fd',
      gymName: this.name,
      //email : this.email,
      addressLine1:this.address,
      city_county: this.city,
      country:this.country
    }
    this.userservice.editGym(this.name,this.address,this.city,this.country).subscribe((result)=>
  {
    console.log(result);
    if(result.status == 'success')
    {
      
        this.toastr.success('Gym Updated Successfully','Success');
      
      //this.activeModal.close();
      
    }
    else{
      console.log("Ererorrorro",result.message);
      this.toastr.error('error',result.message)
    }
  })
  }
}
