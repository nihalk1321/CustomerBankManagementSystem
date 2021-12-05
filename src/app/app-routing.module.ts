import { Routes } from "@angular/router";
import { AppGaurdGuard } from "./app-gaurd.guard";
import { AddPayeeComponent } from "./customer_components/add-payee/add-payee.component";
import { CustomerSummaryComponent } from "./customer_components/customer-summary/customer-summary.component";
import { CustomerComponent } from "./customer_components/customer/customer.component";
import { PayeeListComponent } from "./customer_components/payee-list/payee-list.component";
import { SendToPayeeComponent } from "./customer_components/send-to-payee/send-to-payee.component";
import { UpdateCustomerProfileComponent } from "./customer_components/update-customer-profile/update-customer-profile.component";
import { EmpGuard } from "./emp.guard";
import { ChangeAccountStatusComponent } from "./employee_components/change-account-status/change-account-status.component";
import { CustomerListComponent } from "./employee_components/customer-list/customer-list.component";
import { CustomerTransactionComponent } from "./employee_components/customer-transaction/customer-transaction.component";
import { EmployeeComponent } from "./employee_components/employee/employee.component";
import { RegisterCustomerComponent } from "./employee_components/register-customer/register-customer.component";
import { UpdateProfileComponent } from "./employee_components/update-profile/update-profile.component";
import { LoginComponent } from "./login/login.component";



export const RouteArray: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'customer/:customerId',
    component: CustomerComponent,
    canActivate: [AppGaurdGuard]
  },

  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registerCustomer',
    component: RegisterCustomerComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'customerList',
    component: CustomerListComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'updateEProfile',
    component: UpdateProfileComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'changeAccountStatus/:customerId',
    component: ChangeAccountStatusComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'customerTransaction/:customerId',
    component: CustomerTransactionComponent,
    canActivate: [EmpGuard]
  },
  {
    path: 'customerSummary',
    component: CustomerSummaryComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: 'addPayee',
    component: AddPayeeComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: 'updateCProfile',
    component: UpdateCustomerProfileComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: 'sendToPayee/:payee.payeeId',
    component: SendToPayeeComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: 'payeeList/:customerId',
    component: PayeeListComponent,
    canActivate: [AppGaurdGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

]



