import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-send-to-payee',
  templateUrl: './send-to-payee.component.html',
  styleUrls: ['./send-to-payee.component.css']
})
export class SendToPayeeComponent implements OnInit {
  param: any
  constructor(private custServ: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get("payee.payeeId");
    console.log(this.param)
  }

  sendToPayeeHandler(formData: any) {
    console.log("form  "+formData.amount)
    this.custServ.sendToPayeeService(sessionStorage.getItem('loginId'), formData.amount, this.param)
      .subscribe(data => {
        alert("Transferred to successfully ")
        this.router.navigate(['customer']);
      })


  }
}
