"use client";

import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
    TextInput,
    NumberInput,
    Select,
    SelectItem,
    DatePicker,
    DatePickerValue,
} from "@tremor/react";
import { Tenant } from "@/types";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { generatePDF } from "@/utils/generatePDF";



const StatementsTab = ({ tenants }: { tenants: Tenant[] }) => {
    const generateDefaultTenantItemAmounts = (tenants: Tenant[]) => {
        const defaultTenantItemAmounts: { [key: string]: { [key: string]: number | null | undefined } } = {};
        tenants.forEach(tenant => {
            defaultTenantItemAmounts[tenant.id] = {
                item1Amount: tenant.lease_amount === null ? 0 : tenant.lease_amount,
                item2Amount: tenant.maintenance_fee === null ? 0 : tenant.maintenance_fee,
                item3Amount: tenant.parking_fee === 0 ? 0 : tenant.parking_fee,
                item4Amount: 0,
                item5Amount: 0,
                item6Amount: 0,
            };
        });
        return defaultTenantItemAmounts;
    };
    
    const generateDefaultTenantItemText = (tenants: Tenant[]) => {
        const defaultTenantItemText: { [key: string]: { [key: string]: string } } = {};
        tenants.forEach(tenant => {
            defaultTenantItemText[tenant.id] = {
                item1: `Lease on Suite ${(JSON.stringify(tenant.unit[0].number.join(", "))).replaceAll('"', '')}`,
                item2: "Maintenance Fee",
                item3: tenant.parking_fee ? "Parking Fee" : "",
                item4: "",
                item5: "",
                item6: "",
            };
        });
        return defaultTenantItemText;
    };

    const [date, setDate] = useState<DatePickerValue>(new Date());
    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [tenantItemText, setTenantItemText] = useState<{ [key: string]: { [key: string]: string } }>(generateDefaultTenantItemText(tenants));
    const [tenantItemAmounts, setTenantItemAmounts] = useState<{ [key: string]: { [key: string]: number | null | undefined } }>(generateDefaultTenantItemAmounts(tenants));

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // handle change in number input | access with tenantItemAmounts["1"]?.item1Amount syntax
    const handleChangeAmount = (tenantId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTenantItemAmounts(prevTenantItemAmounts => ({
            ...prevTenantItemAmounts,
            [tenantId]: {
                ...(prevTenantItemAmounts[tenantId] || {}),
                [name]: Number(value),
            },
        }));
    };

    // handle change in text input | access with tenantItemText["1"]?.item1Text syntax
    const handleChangeText = (tenantId: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTenantItemText(prevTenantItemText => ({
            ...prevTenantItemText,
            [tenantId]: {
                ...(prevTenantItemText[tenantId] || {}),
                [name]: value,
            },
        }));
    };

    // calculate total amount for each tenant
    const totalAmount = (tenantId: number) => {
        let total = Object.values(tenantItemAmounts[`${tenantId}`] || {}).reduce((sum, amount) => (sum ?? 0) + (amount ?? 0), 0);
        return total;
    }


    // generate array of total amounts for each tenant
    const getTotalAmounts = tenants.map(tenant => totalAmount(tenant.id));

    return (
        <Card className="mt-[50px] rounded-tremor-large bg-tan-200 ring-0">
            <div className="flex p-[16px] items-center justify-evenly">
                <div className="w-fit font-sans p-[10px] flex items-center">
                    <Text className="text-[20px] font-sans m-[10px] text-grey font-bold">Date: </Text>
                    <DatePicker
                        value={date}
                        onValueChange={setDate}
                        placeholder="Select Date"
                    />
                </div>
                <div className="w-fit font-sans p-[10px] flex items-center">
                    <Text className="text-[20px] font-sans m-[10px] text-grey font-bold">Month: </Text>
                    <Select
                        placeholder="Select Month"
                        value={selectedMonth}
                        onValueChange={setSelectedMonth}
                    >
                        {months.map((month, index) => (
                            <SelectItem key={index} value={month}>
                                {month}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <button
                    type="button"
                    className="w-fit font-sans p-[10px] flex items-center bg-gold rounded-xl"
                    onClick={() => generatePDF({ tenants, tenantItemText, tenantItemAmounts, getTotalAmounts, date, selectedMonth })}
                >
                    <Text className="text-[20px] font-sans m-[10px] text-tan-100 font-bold">Generate Statements</Text>
                </button>
            </div>
            <Table className="font-sans p-[10px]">
                <TableHead className="text-[20px]">
                    <TableRow>
                        <TableHeaderCell className="text-left">Tenant</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 1</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 2</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 3</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 4</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 5</TableHeaderCell>
                        <TableHeaderCell className="text-center">Item 6</TableHeaderCell>
                        <TableHeaderCell className="text-center">Total</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tenants.map((item) => (
                        console.log(tenants[item.id - 1]),
                        <TableRow key={item.id}>
                            <TableCell className="text-left p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl rounded-">
                                    {item.first_name} {item.last_name}
                                </div>
                            </TableCell>
                            {Object.entries(tenantItemText[item.id] || {}).map(([key, value]) => {
                                return (
                                    <TableCell key={`${item.id}-${key}`} className="text-center p-[8px]">
                                        <div className="m-[10px] text-[16px] rounded-xl">
                                            <TextInput
                                                placeholder=""
                                                name={`${key}`}
                                                value={tenantItemText[item.id]?.[key]}
                                                onChange={handleChangeText(item.id)}
                                                className="rounded-t-tremor-medium rounded-b-tremor-none"
                                            />
                                            <NumberInput
                                                placeholder=""
                                                name={`${key}Amount`}
                                                value={tenantItemAmounts[item.id]?.[`${key}Amount`] ?? 0}
                                                onChange={handleChangeAmount(item.id)}
                                                className="rounded-t-tremor-none rounded-b-tremor-medium"
                                            />
                                        </div>
                                    </TableCell>
                                )
                            })}
                            <TableCell className="text-center p-[8px]">
                                <div className="inline-block text-[14px] bg-tan-200 rounded-xl">
                                    {totalAmount(item.id)}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default StatementsTab;