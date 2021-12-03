import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';
import { ICustomerDTO } from 'src/app/Interfaces/ICustomerDTO';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent implements OnInit {
  customerDTO: ICustomerDTO;
  customer: ICustomer;
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.customer = {}
    this.customerDTO = {
      customerDTOEmail: "",
      customerDTOPhone: 0,
    }
  }

  ngOnInit(): void {
    console.log("Inside ng init");

    this.customerService.getCustomerDetailsByIdService(63)
      .subscribe((data: any) => {
        this.customer = data;
        console.log(this.customer)
      })
  }
  editCustomerHandler(data: any) {
    this.customerDTO.customerDTOEmail = data.email;
    this.customerDTO.customerDTOPhone = data.phone;

    this.customerService.editCustomer(63, this.customerDTO)
      .subscribe((data: any) => {
        console.log(data)
        this.router.navigate(['customer'])
      })
  }
}


