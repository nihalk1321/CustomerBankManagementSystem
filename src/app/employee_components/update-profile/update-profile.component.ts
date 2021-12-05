import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/Interfaces/Employee';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  employee: Employee;
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employee = {}
  }

  editEmployeeHandler(data: any) {
    this.employee.employeeEmail = data.email;
    this.employee.employeePhone = data.phone;
    this.employee.employeeAddress = data.address;

    this.employeeService.editEmployeeService(7, this.employee)
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['employee']);
      })
  }

  ngOnInit(): void {
    console.log("Inside ng init");

    this.employeeService.getEmployeeById(7)
      .subscribe((data: any) => {
        this.employee = data;
        console.log(this.employee);
      })
  }

}