import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase {
    Id: number;
    SellRent: number;
    Name: string;
    PType: string;
    BHK: number;
    FType: string;
    Price: number;
    BuiltArea: number;
    CarpetArea?: number;
    Address: string;
    Address2?: string;
    City: string;
    FloorNo?: string;
    TotalFloors?: string;
    RTM: boolean;
    AOP?: string;
    MainEntrance?: string;
    Security?: number;
    Gated?: boolean;
    Maintenance?: number;
    Possession?: string;
    estPossessionOn?: string;
    Image?: string;
    Description?: string;
    PostedOn: string;
    PostedBy: number;

}

