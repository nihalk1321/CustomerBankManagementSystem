import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { IPayee } from 'src/app/Interfaces/IPayee';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  payee: IPayee;
  payees: IPayee[];
  constructor(private customerService: CustomerService) {
    this.payee = {
      payeeName: "",
      payeeAccountNumber: 0

    },
      this.payees = []
  }

  ngOnInit(): void {
  }
  addPayeeHandler(payeeData: any) {
    this.payee.payeeName = payeeData.name
    this.payee.payeeAccountNumber = payeeData.accountNumber
    this.payees.push(this.payee)
    this.customerService.addPayeeService(payeeData.cid, this.payees)
      .subscribe(data => {
        console.log(data);
      })
  }
}
