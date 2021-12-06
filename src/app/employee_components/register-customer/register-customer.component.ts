import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../Validation';
import { imageService } from 'src/app/imageService';
// import Validation from './utils/validation';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer: ICustomer
  fileName = '';
  file: File | undefined;
  // form: FormGroup;
  // submitted = false;

  constructor(private empServ: EmployeeService, private formBuilder: FormBuilder,private img:imageService) {
    this.customer = {
      customerId: 0,
      customerName: "",
      customerEmail: "",
      customerAddress: "",
      customerPhone: 0,
      customerUserName: "",
      customerPassword: "",
      payees: [{
        payeeName: "",
        payeeAccountNumber: 0
      },
      ],
      account: {
        accountId: 0,
        accountNumber: 0,
        accountBalance: 500,
        status: "ACTIVE",
      },
      transactions: [{
        transactionId: 0,
        transactionDate: 0,
        type: "DEPOSIT"
      }]

    }
  }

  registerCustomer(inputCustomer: any) {
    this.customer.customerName = inputCustomer.name
    this.customer.customerEmail = inputCustomer.email
    this.customer.customerPhone = inputCustomer.phone
    this.customer.customerUserName = inputCustomer.username
    this.customer.customerPassword = inputCustomer.password
    this.customer.customerAddress = inputCustomer.address
  
    this.empServ.registerCustomerService(this.customer).subscribe()

    alert("Account created")

  }

  onFileSelected(event: any) {

    this.file = event.target.files[0];
    console.log("inside upload image ")
    console.log(this.file);
    this.uploadImage(this.file)
  }
  uploadImage(file: any) {
    if (file) {
      console.log("Inside upload image function")
      this.fileName = file.name;

      const formData = new FormData();
      formData.append("image", file);

      this.img.uploadImageToBackend(formData)
        .subscribe(data => {
          console.log(data)
          // this.router.navigate(['employee/viewAllCustomers'])
        });

      // this.fileName = file.name;
      // const formData = new FormData();
      // formData.append("thumbnail", file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
      // upload$.subscribe();

      // this.router.navigate(['employee/viewAllCustomers'])
    }
  }
  ngOnInit(): void {
    // this.form = this.formBuilder.group(
    //   {
    //     fullname: ['', Validators.required],
    //     username: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(20)
    //       ]
    //     ],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(40)
    //       ]
    //     ],
    //     confirmPassword: ['', Validators.required],
    //     acceptTerms: [false, Validators.requiredTrue]
    //   },
    //   {
    //     validators: [Validation.match('password', 'confirmPassword')]
    //   }
    // );
  }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.form.invalid) {
  //     return;
  //   }

  //   console.log(JSON.stringify(this.form.value, null, 2));
  // }

  // onReset(): void {
  //   this.submitted = false;
  //   this.form.reset();
  // }

}
