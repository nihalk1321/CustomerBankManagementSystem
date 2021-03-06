import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from './Interfaces/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:8111/api/v1/employee";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  }

  authenticate(data: any): Observable<any> {
    console.log(data.userNameDTO);
    console.log(data.passwordDTO);
    console.log(data);

    return this.http.post(this.url + "/authenticateEmp", data)
  }

  getEmployeeById(id: any):Observable<any> {

    return this.http.get(this.url + "/getEmployeeById/" + id);
  }
  editEmployeeService(employeeId: any, employeeData: any) {

    return this.http.put(this.url + "/editEmployee/" + employeeId, employeeData)
  }
  // CHANGE EMPLOYEE PASSWORD
  changeEmployeePasswordHandler() {

  }

  // GET ALL CUSTOMER 
  getAllCustomerService(): Observable<any> {
    return this.http.get(this.url + "/getAllCustomerDetails")
  }
  // REGISTER CUSTOMER 
  registerCustomerService(customer: ICustomer): Observable<any> {
    console.log("serv" + customer)
    return this.http.post(this.url + "/addCustomer", customer)
  }
  // CHANGE ACCOUNT STATUS
  changeStatusService(cid: number, statusType: any): Observable<any> {
    console.log("Serv " + statusType)
    console.log("serv " + cid)
    if (statusType == 'active') {
      return this.http.post(this.url + "/setCustomerStatusActive/" + cid, null)
      console.log('active')
    }
    else if (statusType == 'inactive') {
      return this.http.post(this.url + "/setCustomerStatusInactive/" + cid, null)
      console.log('inactive')
    }
    else {
      return this.http.post(this.url + "/setCustomerStatusLocked/" + cid, null)
      console.log('locked')
    }

  }



  // DELETE CUSTOMER
  deleteCustomerService(customerId: number): Observable<any> {
    return this.http.delete(this.url + "/deleteCustomer/" + customerId)
  }
  // DEPOSUT AND WITHDRAW 
  depositService(param: any, amount: number): Observable<any> {
    console.log('service ---id =' + param)
    console.log('amount=' + amount)
    console.log(typeof (amount.valueOf()))
    return this.http.post(this.url + "/deposit/" + param, amount.valueOf())
  }
  withdrawService(param: any, amount: any): Observable<any> {
    return this.http.post(this.url + "/withdraw/" + param, amount.valueOf())
  }

 //====AUTHENTICATION=======================================================================================

 authenticate(data: any): Observable<any> {
  console.log(data.userNameDTO);
  console.log(data.passwordDTO);
  console.log(data);

  return this.http.post(this.url + "/authenticate", data)
}


}
