import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';


function createData(id, reciever, Type, status, date, amount,image) {
  return { id, reciever, Type, status, date, amount,image };
}
const rows = [
  createData(0, "Emma Ryna Jr", "Salary", "Pending", "Feb 19th,2023", "$3,892","/static/images/avatar/1.jpg"),
  createData(1, "Adrian Daren", "Bonus", "Done", "Feb 18th,2023", "$1073","/static/images/avatar/2.jpg"),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function RecentPay() {
  return (
    <div>
      <h3 style={{alignContent:'left'}}>Recently Payments</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          {rows.map((row) => (
            <Grid item xs={8}>
            <Item>
            <Stack direction="row">

            <Avatar alt="Remy Sharp" src={row.image}/>
            
              <TableCell >
                {row.reciever}
                <br/>
                {row.date}
              </TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
              </Stack>
              </Item>
        </Grid>
          ))}  
          </Grid>
          </Box>
    </div>
  )
}

export default RecentPay