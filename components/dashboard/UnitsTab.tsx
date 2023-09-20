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
import { Unit } from "@/types";



const UnitsTab = ({ units }: { units: Unit[] }) => {
    const torf = (attr: any) => {
        if (attr.toString() === "true") {
            return "yes"
        } else if (attr.toString() === "false") {
            return "no"
        } else {
            return attr.toString()
        }
    }

    const bgColor = (attr: any) => {
        if (attr.toString() === "true") {
            return "bg-success/75"
        } else if (attr.toString() === "false") {
            return "bg-danger/75"
        } else {
            return "bg-tan-100"
        }
    }

    return (
        <Card className="mt-[50px] rounded-tremor-large bg-tan-200 ring-0">
            <Table className="font-sans p-[10px]">
                <TableHead className="text-[20px]">
                    <TableRow>
                        <TableHeaderCell className="text-center">ID</TableHeaderCell>
                        <TableHeaderCell className="text-center">Number</TableHeaderCell>
                        <TableHeaderCell className="text-center">Building</TableHeaderCell>
                        <TableHeaderCell className="text-center">Square Feet</TableHeaderCell>
                        <TableHeaderCell className="text-center">Bathroom</TableHeaderCell>
                        <TableHeaderCell className="text-center">Office</TableHeaderCell>
                        <TableHeaderCell className="text-center">Occupied</TableHeaderCell>
                        <TableHeaderCell className="text-center">Tenant ID</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className="">
                    {units.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.id}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.number.join(", ")}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.building}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="m-[10px] text-[16px] rounded-xl">
                                    {item.square_feet}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className={`inline-block m-[10px] text-[16px] text-white font-bold py-[10px] px-[20px] rounded-xl hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px] hover:cursor-pointer ${bgColor(item.bathroom)} transition ease-s-curve`}>
                                    {torf(item.bathroom)}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className={`inline-block m-[10px] text-[16px] text-white font-bold py-[10px] px-[20px] rounded-xl hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px] hover:cursor-pointer ${bgColor(item.office)} transition ease-s-curve`}>
                                    {torf(item.office)}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className={`inline-block m-[10px] text-[16px] text-white font-bold py-[10px] px-[20px] rounded-xl hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px] hover:cursor-pointer ${bgColor(item.occupied)} transition ease-s-curve`}>
                                    {torf(item.occupied)}
                                </div>
                            </TableCell>
                            <TableCell className="text-center p-[8px]">
                                <div className="inline-block m-[10px] text-[16px] bg-tan-300 font-bold py-[10px] px-[20px] rounded-xl hover:drop-shadow-lg hover:scale-105 hover:translate-y-[-2px] hover:cursor-pointer transition ease-s-curve">
                                    {item.tenant_id}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default UnitsTab;