import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-send-to-payee',
  templateUrl: './send-to-payee.component.html',
  styleUrls: ['./send-to-payee.component.css']
})
export class SendToPayeeComponent implements OnInit {

  constructor(private custServ:CustomerService) { }

  ngOnInit(): void {
  }

  sendToPayeeHandler(formData:any){
    this.custServ.sendToPayeeService(formData.cid,formData.amount,formData.accountNumber).subscribe()


  }
}
