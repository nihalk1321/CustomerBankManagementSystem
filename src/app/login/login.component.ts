import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EmployeeService } from '../employee.service';
import { ICredentials } from '../Interfaces/ICredentials';
import { ICustomer } from '../Interfaces/ICustomer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: `<app-customer [id] = gotId></app-customer>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myCred: ICredentials;

  constructor(private employeeService: EmployeeService, private customerService: CustomerService, private router: Router) {

    this.myCred = {};


  }

  loginHandler(formData: any) {
    console.log("component" + formData)
    this.myCred.userNameDTO = formData.customerUserName;
    this.myCred.passwordDTO = formData.customerPassword;
    console.log(this.myCred)
    if (this.myCred.userNameDTO == 'Admin' && this.myCred.passwordDTO == 'admin') {
      
      sessionStorage.setItem('AdminId','Admin' )
      this.router.navigate(['employee'])
    }

    else {
      this.customerService.authenticate(this.myCred)
        .subscribe(data => {
          if (data == null) {
            this.router.navigate(['login'])
          }
          this.customerService.checkCustomerStatusService(data).subscribe(status => {
            if (status) {
              sessionStorage.setItem('loginId', data)
              this.router.navigate(['customer'])
            }
            else {
              this.router.navigate(['login'])
              alert('Your Account is either is Locked or Inactive')
            }
          })


        })
    }
  }

  ngOnInit(): void {

  }
}