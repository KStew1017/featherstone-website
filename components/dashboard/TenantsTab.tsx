"use client";

import {
    Card,
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableBody,
} from "@tremor/react";
import { Tenant } from "@/types";


const TenantsTab = ({ tenants }: { tenants: Tenant[] }) => {
    return (
        <Card className="mt-[50px] rounded-tremor-large bg-tan-200 ring-0">
            <Table className="font-sans p-[10px]">
                <TableHead className="text-[20px]">
                    <TableRow>
                        <TableHeaderCell className="text-center">ID</TableHeaderCell>
                        <TableHeaderCell className="text-center">First Name</TableHeaderCell>
                        <TableHeaderCell className="text-center">Last Name</TableHeaderCell>
                        <TableHeaderCell className="text-center">Email</TableHeaderCell>
                        <TableHeaderCell className="text-center">Phone</TableHeaderCell>
                        <TableHeaderCell className="text-center">Bussiness Name</TableHeaderCell>
                        <TableHeaderCell className="text-center">Unit</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tenants.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="text-center p-[8px] font-bold">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.id}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.first_name}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.last_name}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.email}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.phone}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.business_name}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="inline-block m-[10px] text-[14px] bg-tan-200 py-[10px] px-[20px] rounded-xl">
                                    {(item.unit[0].number).join(", ")}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default TenantsTab;