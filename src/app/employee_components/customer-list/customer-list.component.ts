import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { ICustomer } from 'src/app/Interfaces/ICustomer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[];
  constructor(private empServ: EmployeeService) {
    this.customers = []
  }

  getAllCustomers() {
    this.empServ.getAllCustomerService()
      .subscribe(data => {
        this.customers = data;
      })
  }

  deleteHandler(customerId: number) {
    if (confirm("Do you want to delete this record?")) {
      this.empServ.deleteCustomerService(customerId)
        .subscribe(data => {
          this.getAllCustomers();
        })
    }
  }
  ngOnInit(): void {
    this.getAllCustomers();
  }

}
