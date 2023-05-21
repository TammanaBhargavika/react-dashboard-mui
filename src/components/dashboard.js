import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FitbitIcon from '@mui/icons-material/Fitbit';
import Link from '@mui/material/Link';
import { mainListItems, secondListItems, ThirdListItems } from './listItems';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TeamPayments from './TeamPayments';
import IncomeStatistics from './IncomeStatistics';
import BestPlan from './BestPlan';
import Transactions from './Transactions';
import Savings from './Savings';
import RecentPay from './RecentPay';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">Your Website</Link>
            {' '} {new Date().getFullYear()}{'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({

    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const defaultTheme = createTheme();

export default function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} style={{ backgroundColor: 'black' }}>
                    <Toolbar sx={{ pr: '24px', }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" align="left" noWrap sx={{ flexGrow: 1, color: 'blue' }}>
                            Analytics
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined">Full Statistics</Button>
                            <Button variant="outlined">Results Summary</Button>
                        </Stack>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <Avatar alt="Remy Sharp" sx={{ width: 28, height: 28 }} />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <FitbitIcon />
                    <Typography variant="h4" component="div">Veritas</Typography>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondListItems}
                        <Divider sx={{ my: 1 }} />
                        {ThirdListItems}
                    </List>
                </Drawer>
                <Box component="main" style={{ border: '2px black' }} sx={{ backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto' }}>
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}> <TeamPayments /> </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}> <IncomeStatistics /> </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}> <Savings /> </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, }}> <BestPlan /> </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <RecentPay />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Transactions />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider >
    );
}