import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react'
import DashboardContent from "./dashboard"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/"> Your Website </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessagePassword, setErrorMessagePassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [{ username: "adminworks@gmail.com", password: "*Tammana3" },];
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmail(data.get("email"))
        setPassword(data.get("password"))
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        setErrorMessageEmail(null);
        if (isValidEmail(email)) {
            console.log('Email is valid');
        } else { setErrorMessageEmail('Email is invalid'); }
        // if (isValidPass(password)) {
        //     console.log('Strong Password');
        // } 
        // // Find user login info
        const userData = database.find((user) => user.username === email);
        // Compare user info
        if (userData) {
            if (userData.password !== password) {
                // Invalid password
                setErrorMessagePassword("Invalid Password");
            } else {
                setIsSubmitted(true);
                setErrorMessageEmail(null)
                setErrorMessagePassword(null)
            }
        } else {
            // Username not found
            setErrorMessageEmail("Invalid Email");
        }
    };
    // Generate JSX code for error message
    // const renderErrorMessage = (name) =>{
    //     console.log('name',name,errorMessages)

    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>);
    // }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    // function isValidPass(value) {
    //     if (validator.isStrongPassword(value, {
    //         minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    //     })) { return true
    //     } else { setErrorMessage('Is Not Strong Password') }
    // }
    return (
        <div>
            {!isSubmitted ? (<ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
                        <Typography component="h1" variant="h5">Login</Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth label="Email Address" id="email" name="email" autoComplete="email" autoFocus value={email} onChange={e => setEmail(e.currentTarget.value)} />
                            <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Login </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2"> Forgot password? </Link>
                                </Grid>
                            </Grid>
                        </Box>
                        {errorMessageEmail && <p style={{ color: 'red' }}>{errorMessageEmail}</p>}
                        {errorMessagePassword && <p style={{ color: 'red' }}>{errorMessagePassword}</p>}
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>) : <DashboardContent />}
        </div>
    );
}