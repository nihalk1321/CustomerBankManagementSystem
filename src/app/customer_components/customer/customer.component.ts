import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount } from 'src/app/Interfaces/iAccount';
import { ICustomer } from 'src/app/Interfaces/ICustomer';
import { CustomerService } from '../../customer.service';
import { IPayee } from '../../Interfaces/IPayee';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: ICustomer;
  account: IAccount;
  payees: IPayee[];
  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    this.customer = {
      customerId: 0,
      customerName: "",
      customerEmail: "",
      customerAddress: "",
      customerPhone: 0,
      customerUserName: "",
      customerPassword: "",
      payees: [],
      account: {
        accountId: 0,
        accountNumber: 0,
        accountBalance: 0,
        status: "ACTIVE",
      },
    }
  }

  ngOnInit(): void {
    this.getCustomerSummaryHandler()
  }
  getCustomerSummaryHandler() {
    // console.log('compo id='+id.id
    // sessionStorage.getItem('loginId')
    // console.log('inside get item  '+sessionStorage.getItem('loginId'))
    this.customerService.getCustomerDetailsByIdService(sessionStorage.getItem('loginId'))
      .subscribe(data => {
        console.log("cooos" + data.account)
        this.customer.customerId = data.customerId
        this.customer.customerName = data.customerName
        this.customer.customerEmail = data.customerEmail
        this.customer.customerAddress = data.customerAddress
        this.customer.customerPhone = data.customerPhone
        this.customer.customerUserName = data.customerUserName
        this.customer.customerPassword = data.customerPassword
        this.customer.payees = data.payees
        this.customer.account = data.account.accountBalance
        this.customer.account = data.account.accountBalance
        this.customer.transactions = data.customerId
      })
  }


  logoutHandler() {
    console.log('logouthandler')
    sessionStorage.removeItem('loginId')
    this.router.navigate(['login'])
  }
}
