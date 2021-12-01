import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }
  // editCustomerHandler(data: any) {
  //   this.customerService.editCustomer(22, data)
  //     .subscribe((data: any) => {
  //       console.log(data)
  //       this.router.navigate(['customer'])
  //     })
  // }

}
