import React from 'react';
import {TextField, Box} from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import PurpleButton from './PurpleButton';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4C4C6D'
        }
    },
    direction: 'rtl',

})

const useStyles = makeStyles({
    textField: {
        width: '20rem'
    }
});

export default function SignIn(props) {
    const classes = useStyles();
    return (
        <div>
            <h1>כניסה</h1>
            <ThemeProvider theme={theme}>
                <Box display="flex" flexDirection='column' padding='2rem'>
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
                        <PurpleButton variant='contained' size='large' label='כניסה' color='primary'></PurpleButton>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
}
