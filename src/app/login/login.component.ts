import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EmployeeService } from '../employee.service';
import { ICredentials } from '../Interfaces/ICredentials';
import { ICustomer } from '../Interfaces/ICustomer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: `<app-customer [id] = gotId></app-customer>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myCred: ICredentials;

  constructor(private employeeService: EmployeeService, private customerService: CustomerService, private router: Router) {
    this.myCred = {};
  }
  ngOnInit(): void {

  }

  loginHandler(formData: any) {
    this.myCred.userNameDTO = formData.customerUserName;
    this.myCred.passwordDTO = formData.customerPassword;
    console.log(formData.logintype)
    
    if (formData.logintype == 'employee') {
      console.log('emp')
      this.employeeService.authenticate(this.myCred)
        .subscribe(data => {
          console.log('emp data'+data)
          if (data == null) {
            alert('Invalid Credentials')
            this.router.navigate(['login'])
          }
          else {
            sessionStorage.setItem('AdminId', data)
            this.router.navigate(['employee'])
          }
        })
    }

    else {
      console.log('cust')
      this.customerService.authenticate(this.myCred)
        .subscribe(data => {
          console.log('cust data'+data)
          if (data == null) {
            alert('Invalid Credentials')
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


}