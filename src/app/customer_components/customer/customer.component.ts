import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';
import { IPayee } from '../../Interfaces/IPayee';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  custID:any;
 
  constructor(private customerService: CustomerService, private route: ActivatedRoute,private router:Router) { 
    this.custID = sessionStorage.getItem('loginId');
  }

  ngOnInit(): void {
  }

  logoutHandler(){
    console.log('logouthandler')
    sessionStorage.removeItem('loginId')
    this.router.navigate(['login'])
  }
}
