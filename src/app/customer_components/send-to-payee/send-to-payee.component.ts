import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-send-to-payee',
  templateUrl: './send-to-payee.component.html',
  styleUrls: ['./send-to-payee.component.css']
})
export class SendToPayeeComponent implements OnInit {

  constructor(private custServ:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  sendToPayeeHandler(formData:any){
    this.custServ.sendToPayeeService(formData.cid,formData.amount,formData.accountNumber)
    .subscribe(data=>{
      alert("payee added successfully")
        this.router.navigate(['customer']);
    })


  }
}
