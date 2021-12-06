import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { IAccount } from 'src/app/Interfaces/iAccount';
import { ICustomer } from 'src/app/Interfaces/ICustomer';
import { IPayee } from 'src/app/Interfaces/IPayee';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {
  customer: ICustomer;
  account: IAccount;
  payees: IPayee[];

  constructor(private customerService: CustomerService) {
    this.customer = {
      customerId: 0,
      customerName: "",
      customerEmail: "",
      customerAddress: "",
      customerPhone: 0,
      customerUserName: "",
      customerPassword: "",
      payees:[
        
      ] ,
      account: {
        accountId: 0,
        accountNumber: 0,
        accountBalance: 0,
        status: "ACTIVE",
      },
      // transactions: []
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




}
