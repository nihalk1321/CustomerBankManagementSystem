import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  parameter: any
  constructor(private empServ: EmployeeService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get('customerId')
    // console.log(this.parameter)
  }

  transaction(transaction: any) {
  
    console.log(transaction.transactionType)
    console.log(transaction.amount)
    if (transaction.transactionType == "deposit") {
      this.empServ.depositService(this.parameter,transaction.amount)
        .subscribe()
    }
    else {
      this.empServ.withdrawService(this.parameter, transaction.amount)
        .subscribe()
    }

  }
}
