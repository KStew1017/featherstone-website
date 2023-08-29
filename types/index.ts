export type Unit = {
    id: number;
    number: number[];
    building: number;
    square_feet: number;
    bathroom: boolean;
    office: boolean;
    occupied: boolean;
    tenant_id: number | null;
}