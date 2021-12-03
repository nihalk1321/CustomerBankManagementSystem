import { IPayee } from "./IPayee";

export interface ICustomerDTO {
    customerDTOEmail: string;
    customerDTOPhone: number;
    payees?: IPayee[]
}