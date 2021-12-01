import { Routes } from "@angular/router";
import { AddPayeeComponent } from "./customer_components/add-payee/add-payee.component";
import { CustomerSummaryComponent } from "./customer_components/customer-summary/customer-summary.component";
import { CustomerComponent } from "./customer_components/customer/customer.component";
import { SendToPayeeComponent } from "./customer_components/send-to-payee/send-to-payee.component";
import { UpdateCustomerProfileComponent } from "./customer_components/update-customer-profile/update-customer-profile.component";
import { ChangeAccountStatusComponent } from "./employee_components/change-account-status/change-account-status.component";
import { CustomerListComponent } from "./employee_components/customer-list/customer-list.component";
import { DepositComponent } from "./employee_components/deposit/deposit.component";
import { EmployeeComponent } from "./employee_components/employee/employee.component";
import { RegisterCustomerComponent } from "./employee_components/register-customer/register-customer.component";
import { UpdateProfileComponent } from "./employee_components/update-profile/update-profile.component";
import { WithdrawComponent } from "./employee_components/withdraw/withdraw.component";
import { LoginComponent } from "./login/login.component";



export const RouteArray: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },

  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registerCustomer',
    component: RegisterCustomerComponent
  },
  {
    path: 'customerList',
    component: CustomerListComponent
  },
  {
    path: 'updateEProfile',
    component: UpdateProfileComponent
  },
  {
    path: 'changeAccountStatus',
    component: ChangeAccountStatusComponent
  },
  {
    path: 'deposit/:customerId',
    component: DepositComponent
  },
  {
    path: 'withdraw/:customerId',
    component: WithdrawComponent
  },
  {
    path: 'customerSummary',
    component: CustomerSummaryComponent
  },
  {
    path: 'addPayee',
    component: AddPayeeComponent
  },
  {
    path: 'updateCProfile',
    component: UpdateCustomerProfileComponent
  },
  {
    path: 'sendToPayee',
    component: SendToPayeeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

]



