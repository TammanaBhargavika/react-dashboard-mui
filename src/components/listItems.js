import * as React from 'react';
import Box from '@mui/material/Box';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AccountsIcon from '@mui/icons-material/SwitchAccount';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Login from './login';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}> • </Box>
);

export const mainListItems = (
    <React.Fragment>
    <ListItemText primary="MAIN MENU"/>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BarChartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
        </ListItemButton>
    </React.Fragment>
)

export const secondListItems = (
    <React.Fragment>
    <ListItemText primary="TEAMS"/>
        <ListItemButton>
            <Typography variant="h7" component="div">{bull} Marketing</Typography>
        </ListItemButton>
        <ListItemButton>
            <Typography variant="h7" component="div">{bull} Development </Typography>
        </ListItemButton>
    </React.Fragment>
)

export const ThirdListItems = ()=>{
    return(
        <div>
        <ListItemButton >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton onClick={(event) => {
            console.log("top suggestion clicked")
            window.location.reload(false);
          }} >
            <ListItemIcon>
                <LogoutRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </div>
    )
}
    
