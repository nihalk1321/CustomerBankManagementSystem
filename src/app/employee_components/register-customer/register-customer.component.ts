import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  customer: ICustomer
  constructor(private empServ: EmployeeService) {
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
    // this.customer.account.accountBalance = inputCustomer.balanc
    console.log("compo" + this.customer.customerName)
    this.empServ.registerCustomerService(this.customer).subscribe()

    alert("Account created")

  }


  ngOnInit(): void {
  }

}
