import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { IPayee } from '../../Interfaces/IPayee';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {


  }

}
