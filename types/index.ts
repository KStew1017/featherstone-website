import { DateTime } from "luxon";


export type Unit = {
    id: number;
    number: number[];
    building: number;
    square_feet: number;
    bathroom: boolean;
    office: boolean;
    occupied: boolean;
    tenant: {} | null;
    tenant_id: number | null;
}

export type Tenant = {
    id: number;
    first_name: string;
    last_name: string;
    business_phone: string | null;
    cell_phone: string | null;
    business_name: string | null;
    lease_amount: number | null;
    maintenance_fee: number | null;
    parking_fee: number | null;
    unit: Unit[];
}

export type Contact = {
    id: number;
    name: string;
    phone: string;
    message: string;
    date: any;
}