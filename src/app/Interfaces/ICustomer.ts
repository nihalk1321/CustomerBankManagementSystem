import { IAccount } from "./iAccount";
import { IPayee } from "./IPayee";
import { ITransactions } from "./ITransactions";

export interface ICustomer {


    customerId?: number;
    customerName?: string;
    customerEmail?: string;
    customerAddress?: string;
    customerPhone?: number;
    customerUserName?: string;
    customerPassword?: string;
    payees?: IPayee[]
    account?: IAccount;
    transactions?: ITransactions[];
}