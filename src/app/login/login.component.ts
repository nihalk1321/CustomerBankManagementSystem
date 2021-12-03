import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EmployeeService } from '../employee.service';
import { ICredentials } from '../Interfaces/ICredentials';
import { ICustomer } from '../Interfaces/ICustomer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customers: ICustomer[];
  customer: ICustomer;

  myCred: ICredentials;

  constructor(private employeeService: EmployeeService, private customerService: CustomerService, private router: Router) {
    this.customers = [];
    this.customer = {};
    this.myCred = {};


  }

  loginHandler(formData: any) {
    this.myCred.userNameDTO = formData.customerUserName;
    this.myCred.passwordDTO = formData.customerPassword;

    this.customerService.authenticate(this.myCred)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
        console.log("The id inside login component is " + this.customer.customerId);
        if (data == null) {
          this.router.navigate(['login'])
        }
      })
    this.router.navigate(['customer'])
  }

  ngOnInit(): void {

  }
}