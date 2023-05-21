import * as React from 'react';
import validator from "validator";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline'; import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();
export default function Login() {
    const [email, setEmail] = useState('');
    const [mailError, setError] = useState(null);
    const [errorPassMessage, setPassErrorMessage] = useState('')

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    // User Login info
    const database = [
        { username: "adminworks@gmail.com", password: "*Tammana3" },
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setPassErrorMessage('Is Strong Password')
        } else {
            setPassErrorMessage('Is Not Strong Password')
        }
    }

    const handleChange = e => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        var { uname, pass } = document.forms[0];
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                //setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    setError(null);
    if (isValidEmail(email)) {
        console.log('The email is valid');
    } else { setError('Email is invalid'); }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
                    <Typography component="h1" variant="h5">Login</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus value={email} onChange={handleChange} />
                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => validate(e.target.value)} />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Login </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2"> Forgot password? </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    {mailError && <h2 style={{ color: 'red' }}>{mailError}</h2>}
                    {errorPassMessage === '' ? null : <span style={{ fontWeight: 'bold', color: 'red', }}>{errorPassMessage} </span>}
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}