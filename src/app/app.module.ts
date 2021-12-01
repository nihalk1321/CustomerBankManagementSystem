import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouteArray } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer_components/customer/customer.component';
import { EmployeeComponent } from './employee_components/employee/employee.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './employee_components/customer-list/customer-list.component';
import { RegisterCustomerComponent } from './employee_components/register-customer/register-customer.component';
import { UpdateProfileComponent } from './employee_components/update-profile/update-profile.component';
import { ChangeAccountStatusComponent } from './employee_components/change-account-status/change-account-status.component';
import { DepositComponent } from './employee_components/deposit/deposit.component';
import { WithdrawComponent } from './employee_components/withdraw/withdraw.component';
import { CustomerSummaryComponent } from './customer_components/customer-summary/customer-summary.component';
import { UpdateCustomerProfileComponent } from './customer_components/update-customer-profile/update-customer-profile.component';
import { AddPayeeComponent } from './customer_components/add-payee/add-payee.component';
import { SendToPayeeComponent } from './customer_components/send-to-payee/send-to-payee.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    LoginComponent,
    CustomerListComponent,
    RegisterCustomerComponent,
    UpdateProfileComponent,
    ChangeAccountStatusComponent,
    DepositComponent,
    WithdrawComponent,
    CustomerSummaryComponent,
    UpdateCustomerProfileComponent,
    AddPayeeComponent,
    SendToPayeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(RouteArray)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
