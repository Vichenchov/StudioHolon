import React from 'react';
import {Button, TextField} from '@material-ui/core';
import {makeStyles, createTheme, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
    palette: {
        primary:{
            main:'#4C4C6D'
        }
    },
    direction: 'rtl',
})

const useStyles = makeStyles({
    textField: {
        width: '20rem',
    },
    Button: {
        width: '15rem'
    }
});

export default function SignIn(props) {
    const classes = useStyles();
    return (
        <div>
        <h1>כניסה</h1>
         <ThemeProvider theme={theme}>
            <Box display="flex" flexDirection='column'>
                    <Box mt={5}>
                        <TextField
                            id="outlined-basic"     
                            label="שם משתמש"
                            variant="outlined"  
                            className={classes.textField}/>
                    </Box>
                    <Box mt={5}>
                        <TextField
                            id="outlined-basic"
                            label="סיסמא"
                            variant="outlined"
                            className={classes.textField}/>
                    </Box>
                <Box mt={5}>
                    <Button
                        variant="contained"
                        color="primary"
                        size='large'
                        className={classes.textField}>כניסה</Button>
                </Box>
            </Box>
            </ThemeProvider>
        </div>
    );
}
