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
    email: string | null;
    phone: string | null;
    business_name: string | null;
    lease_amount: number | null;
    maintenance_fee: number | null;
    parking_fee: number | null;
    unit: Unit[];
}