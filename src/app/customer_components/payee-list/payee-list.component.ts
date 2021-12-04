import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { IPayee } from 'src/app/Interfaces/IPayee';

@Component({
  selector: 'app-payee-list',
  templateUrl: './payee-list.component.html',
  styleUrls: ['./payee-list.component.css']
})
export class PayeeListComponent implements OnInit {
  param: any;
  payees: IPayee[];
  constructor(private custServ: CustomerService, private route: ActivatedRoute) {
    this.payees = []
  }


  getAllPayees() {
    console.log("inside com")
    this.custServ.getAllPayeesService(sessionStorage.getItem('loginId'))
      .subscribe(data => this.payees=data)
    console.log(this.payees)
  }
  ngOnInit(): void {
    this.getAllPayees()
    // console.log(this.param)
    // this.param = this.route.snapshot.paramMap.get("customerId");
  }

}
