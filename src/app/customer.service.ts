import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPayee } from './Interfaces/IPayee';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "http://localhost:8080/customer";

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  }

  getCustomerDetailsByIdService(customerId: any): Observable<any> {
    console.log(customerId);
    console.log("Inside getCustomerDetailsById of CustomerService")
    return this.http.get(this.url + "/getCustomerDetails/" + customerId)
  }


  editCustomer(customerId: number, customerData: any) {
    console.log("inside edit data")
    console.log("id-" + customerId)
    console.log("name-" + customerData)

    return this.http.put(this.url + "/editCustomer/" + customerId, customerData, { responseType: 'text' })
  }

  authenticate(data: any): Observable<any> {
    console.log(data.userNameDTO);
    console.log(data.passwordDTO);
    console.log(data);

    return this.http.post(this.url + "/authenticate", data)
  }
  addPayeeService(cid: number, payees: IPayee[]): Observable<any> {
    console.log('inside service')
    return this.http.post(this.url + "/addPayee/" + cid, payees)

  }

  sendToPayeeService(cid: number, amount: number, accountNumber: number): Observable<any> {
    return this.http.post(this.url + "/" + cid + "/sendToPayee/" + accountNumber, amount)
  }

  getAllPayeesService(customerId: number): Observable<any> {
    console.log("inside serv")
    console.log(customerId);
    return this.http.get(this.url + "/getAllPayees/" + customerId)

  }
}