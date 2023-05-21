import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import List from '@mui/material/List';

// Generate Order Data
function createData(id, reciever, Type, status, date, amount) {
    return { id, reciever, Type, status, date, amount };
}

const rows = [
    createData(
        0,
        "Emma Ryna Jr",
        "Salary",
        "Pending",
        "Feb 19th,2023",
        "$3,892",
    ),
    createData(
        1,
        "Adrian Daren",
        "Bonus",
        "Done",
        "Feb 18th,2023",
        "$1073",
    ),
    createData(
        2,
        "Roxanne Hills",
        "Salary",
        "Done",
        "April 16th,2023",
        "$2,790",
    ),
]
function preventDefault(event) {
    event.preventDefault();
}

export default function Transactions() {
    return (
        <React.Fragment>
            <Title>Transactions</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Receiver</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="left"> 
                            <CheckBoxOutlineBlankIcon fontSize="inherit"/>
                             <ListItemAvatar><Avatar alt="Remy Sharp" sx={{ width: 20, height: 20 }} />{row.reciever}</ListItemAvatar>
                            </TableCell>
                            <TableCell>{row.Type}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell >{`$${row.amount}`}</TableCell>
                            <TableCell align="right"><Button variant="outlined" size="small">Details</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
        </React.Fragment>
    )
}