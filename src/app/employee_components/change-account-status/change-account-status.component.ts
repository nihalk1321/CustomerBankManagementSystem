import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-change-account-status',
  templateUrl: './change-account-status.component.html',
  styleUrls: ['./change-account-status.component.css']
})
export class ChangeAccountStatusComponent implements OnInit {
parameter:any
  constructor(private empServ: EmployeeService,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.parameter = this.route.snapshot.paramMap.get("customerId");
  }

  changeAccountStatusHandler(formData: any) {
    this.empServ.changeStatusService(this.parameter, formData.statusType)
      .subscribe(
        
      )
  }
}
