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
import { Contact } from "@/types";
import { DateTime } from "luxon";


const ResponseTab = ({ responses }: { responses: Contact[] }) => {
    if (responses.length === 0) {
        return (
            <Card className="mt-[50px] rounded-tremor-large bg-tan-200 ring-0">
                <div className="flex flex-col items-center justify-center p-[10px]">
                    <p className="text-[20px] text-grey text-center font-sans">No responses yet.</p>
                </div>
            </Card>
        )
    } else {
        return (
            <Card className="mt-[50px] rounded-tremor-large bg-tan-200 ring-0">
                <Table className="font-sans p-[10px]">
                    <TableHead className="text-[20px]">
                        <TableRow>
                            <TableHeaderCell className="text-center">Name</TableHeaderCell>
                            <TableHeaderCell className="text-center">Phone Number</TableHeaderCell>
                            <TableHeaderCell className="text-center">Message</TableHeaderCell>
                            <TableHeaderCell className="text-center">Date</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {responses.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="text-center p-[8px]">
                                    <div className="m-[10px] text-[16px] rounded-xl">
                                        {item.name}
                                    </div>
                                </TableCell>
                                <TableCell className="text-center p-[8px]">
                                    <div className="m-[10px] text-[16px] rounded-xl">
                                        {item.phone}
                                    </div>
                                </TableCell>
                                <TableCell className="text-center p-[8px]">
                                    <div className="m-[10px] text-[16px] rounded-xl">
                                        {item.message}
                                    </div>
                                </TableCell>
                                <TableCell className="text-center p-[8px]">
                                    <div className="m-[10px] text-[16px] rounded-xl">
                                        {DateTime.fromJSDate(item.date).toLocaleString()}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        )
    }
}

export default ResponseTab;