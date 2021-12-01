import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';

@Component({
  selector: 'app-customer-summary',
  templateUrl: './customer-summary.component.html',
  styleUrls: ['./customer-summary.component.css']
})
export class CustomerSummaryComponent implements OnInit {
  customer: ICustomer;
  constructor(private customerService: CustomerService) {
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
        accountBalance: 0,
        status: "ACTIVE",
      },
      transactions: [{
        transactionId: 0,
        transactionDate: 0,
        type: "DEPOSIT"
      }]

    }
  }

  ngOnInit(): void {
  }
  getCustomerSummaryHandler(id: any) {
    console.log('compo id='+id.id)
    this.customerService.getCustomerDetailsByIdService(id.id)
      .subscribe(data => {
        // console.log(data.customerId)
        this.customer=data;
      })
  }




}
