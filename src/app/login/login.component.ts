import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { EmployeeService } from '../employee.service';
import { ICredentials } from '../Interfaces/ICredentials';
// import { ICustomer } from '../Interfaces/ICustomer';
// import { FormControl, FormGroup, Validators  } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: `<app-customer [id] = gotId></app-customer>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myCred: ICredentials;
  empId: any;

  constructor(private employeeService: EmployeeService, private customerService: CustomerService, private router: Router) {

    this.myCred = {};
    this.empId = 0;


  }

//   loginForm = new FormGroup({
//     userName:new FormControl('',Validators.required),
//     password:new FormControl('',Validators.required)
// })
//    get userName(){
//      return this.loginForm.get('userName');
//    }
//    get password(){
//     return this.loginForm.get('password');
//   }


  loginHandler(formData: any) {
    console.log("component" + formData)
    this.myCred.userNameDTO = formData.customerUserName;
    this.myCred.passwordDTO = formData.customerPassword;
    console.log(this.myCred)


    // if (this.myCred.userNameDTO == 'Admin' && this.myCred.passwordDTO == 'admin') {

    //   sessionStorage.setItem('AdminId','Admin' )
    //   this.router.navigate(['employee'])
    // }

    this.employeeService.authenticate(this.myCred)
      .subscribe(empData => {
        console.log(empData);
        // this.empId=empData;
        // console.log(this.empId);
        sessionStorage.setItem('AdminId', empData)
      })

    if (sessionStorage.getItem('AdminId') != null) {
      // console.log("inside calue of empid" + this.empId);
      this.router.navigate(['/employee'])
    }



    else {
      sessionStorage.removeItem('AdminId')
      this.customerService.authenticate(this.myCred)
        .subscribe(data => {
          if (data == null || sessionStorage.getItem('AdminId')) {
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