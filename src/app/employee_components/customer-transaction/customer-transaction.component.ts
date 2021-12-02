import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrls: ['./customer-transaction.component.css']
})
export class CustomerTransactionComponent implements OnInit {
  parameter: any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  transactionHandler(transaction: any) {

    console.log(transaction.transactionType)
    console.log(transaction.amount)
    if (transaction.transactionType == "deposit") {
      this.employeeService.depositService(this.parameter, transaction.amount)
        .subscribe()
    }
    else {
      this.employeeService.withdrawService(this.parameter, transaction.amount)
        .subscribe()
    }

  }
  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get("customerId");
  }

}
